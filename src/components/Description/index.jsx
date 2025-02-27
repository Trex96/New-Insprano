"use client";
import styles from "./style.module.scss";
import { useRef, useEffect, useState } from "react";
import Rounded from "../../common/RoundedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Description() {
  const refs = useRef([]);
  const containerRef = useRef(null);
  const dateRef = useRef(null);
  const countdownRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  const [showCountdown, setShowCountdown] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [initialAnimation, setInitialAnimation] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [currentDisplayDate, setCurrentDisplayDate] = useState(new Date('2025-03-10'));
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/sounds/tick.mp3") : null);
  const [isMuted, setIsMuted] = useState(false);
  
  const phrase = "Welcome to GCEK's Premier Tech Odyssey. Where Innovation Meets Excellence. Join us for an extraordinary journey through technology, creativity, and breakthrough innovations.";

  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-03-10'); // Changed to March 10th
    const now = new Date();
    const difference = eventDate - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const animateInitialCountdown = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const endDate = new Date('2025-03-10');
    const now = new Date();
    const totalDays = Math.floor((endDate - now) / (1000 * 60 * 60 * 24));
    
    let currentDate = endDate;
    const animationDuration = 3; // 3 seconds for the animation
    const interval = (animationDuration * 1000) / totalDays;

    const animation = setInterval(() => {
      currentDate = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));
      const difference = endDate - currentDate;

      if (difference <= endDate - now) {
        clearInterval(animation);
        setIsAnimating(false);
        setShowCountdown(true);
        setShowDate(false);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, interval);

    setInitialAnimation(animation);
  };

  const playTick = () => {
    if (audio && !isMuted) {
      audio.currentTime = 0;
      audio.volume = 0.1; // Reduce volume to 10%
      audio.play().catch(err => console.log("Audio play failed:", err));
    }
  };

  const rollNumbersDown = () => {
    setIsRolling(true);
    const endDate = new Date('2025-03-10');
    const now = new Date();
    const monthDiff = (endDate.getFullYear() - now.getFullYear()) * 12 + 
                     (endDate.getMonth() - now.getMonth());
    
    // Create intermediate dates for smooth animation
    const dates = [];
    let currentDate = new Date(endDate);
    
    // Add days until we reach the target month
    while (currentDate > now) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    // Use GSAP for smooth animation
    const tl = gsap.timeline({
      onUpdate: () => playTick(), // Add tick sound on each update
      onComplete: () => {
        setIsRolling(false);
        setShowCountdown(true);
        setShowDate(false);
      }
    });

    tl.to({
      value: 0
    }, {
      value: dates.length - 1,
      duration: 3, // 3 seconds total
      ease: "power1.inOut",
      onUpdate: function() {
        const progress = this.progress();
        const index = Math.min(Math.floor(progress * dates.length), dates.length - 1);
        setCurrentDisplayDate(dates[index]);
      }
    });

    return () => tl.kill();
  };

  const formatDisplayDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setShowDate(true);
          gsap.delayedCall(0.5, rollNumbersDown); // Add small delay before starting
        } else if (!entry.isIntersecting && isVisible) {
          // Reset when section leaves viewport
          setIsVisible(false);
          setShowDate(true);
          setShowCountdown(false);
          if (initialAnimation) {
            clearInterval(initialAnimation);
          }
          // Only attempt to clear props if elements exist
          if (dateRef.current && countdownRef.current) {
            gsap.set([dateRef.current, countdownRef.current], { 
              clearProps: "all" 
            });
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Timer setup
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
      if (initialAnimation) {
        clearInterval(initialAnimation);
      }
      observer.disconnect();
    };
  }, [isVisible, initialAnimation]);

  const startAnimations = () => {
    // Only proceed with animations if elements exist
    if (countdownRef.current) {
      gsap.set(countdownRef.current, { 
        opacity: 0,
        y: 20
      });

      const tl = gsap.timeline({
        onComplete: () => {
          setShowCountdown(true);
          setShowDate(false);
        }
      });

      tl.to({}, { duration: 1.5 })
        .to(countdownRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });

      // Add floating animation only if elements exist
      const countdownItems = document.querySelectorAll('.countdownItem');
      if (countdownItems.length > 0) {
        gsap.fromTo(countdownItems, 
          { y: 0 },
          {
            y: -8,
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: {
              amount: 0.4,
              from: "center"
            }
          }
        );
      }
    }
  };

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <p key={word + "_" + i}>
        {word.split("").map((letter, j) => (
          <span
            key={letter + "_" + j}
            ref={(el) => {
              refs.current.push(el);
            }}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {letter}
          </span>
        ))}
        &nbsp;
      </p>
    ));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(refs.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Subtle floating animation for countdown
    gsap.to('.countdownItem', {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.description}>
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className={styles.soundToggle}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
      <div className={styles.body}>
        <div className={styles.dateContainer}>
          {showDate && (
            <h2 
              ref={dateRef} 
              className={`${styles.eventDate} ${isRolling ? styles.rolling : ''}`}
            >
              {formatDisplayDate(currentDisplayDate)}
            </h2>
          )}
          <div 
            ref={countdownRef} 
            className={`${styles.countdown} ${showCountdown ? styles.visible : ''}`}
          >
            <div className={styles.countdownItem}>
              <span>{String(timeLeft.days).padStart(2, '0')}</span>
              <p>Days</p>
            </div>
            <div className={styles.countdownItem}>
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <p>Hours</p>
            </div>
            <div className={styles.countdownItem}>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <p>Minutes</p>
            </div>
            <div className={styles.countdownItem}>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        
        <div className={styles.textContainer}>
          {splitWords(phrase)}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <p>Register Now</p>
          </button>
          <button className={`${styles.button} ${styles.secondary}`}>
            <p>About Event</p>
          </button>
        </div>
      </div>
    </section>
  );
}
