'use client';

import {
  createScope,
  animate,
  createTimeline,
  stagger,
  text,
  createSpring,
} from "animejs";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function TextAnimation() {
  const animationRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    if (scopeRef.current?.methods?.onClick) {
      scopeRef.current.methods.onClick();
    }
    
    setTimeout(() => {
      window.open('https://lewisscrimgeour.com', '_blank', 'noopener,noreferrer');
    }, 500);
  };

  useEffect(() => {
    if (!animationRef.current) return;

    scopeRef.current = createScope({
      root: '#horizontal-split',
      defaults: {
        ease: 'outQuad',
        duration: 500,
      }
    }).add((scope) => {
      if (!scope) return;
      const { root, methods } = scope;

      text.split('h2', {
        chars: {
          class: 'char',
          clone: 'left',
          wrap: 'clip',
        },
      });

      const ease = createSpring({ stiffness: 90, damping: 11 });

      const rotateAnim = createTimeline({
        autoplay: false,
        defaults: { ease: 'inOutQuad', duration: 400, }
      })
      .add('.char > span', { x: '100%' }, stagger(5, { use: 'data-char' }));

      scope.add('onEnter', () => {
        animate(rotateAnim, { progress: 1 });
      });
      
      scope.add('onLeave', () => {
        animate(rotateAnim, { progress: 0 });
      });
      
      scope.add('onClick', () => {
        createTimeline().add('.char > span', {
          y: '100%',
          composition: 'blend',
          ease,
        }, stagger(10, { use: 'data-char', from: 'random' }));
        
        timeoutRef.current = setTimeout(() => {
          methods.onRevert();
        }, 1000);
      });
      
      scope.add('onRevert', () => {
        createTimeline().add('.char > span', {
          y: '0%',
          composition: 'blend',
          ease,
        }, stagger(10, { use: 'data-char', from: 'random' }));
      });

      root.addEventListener('pointerenter', methods.onEnter);
      root.addEventListener('pointerleave', methods.onLeave);
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (scopeRef.current) {
        const root = animationRef.current;
        if (root) {
          root.removeEventListener('pointerenter', scopeRef.current.methods?.onEnter);
          root.removeEventListener('pointerleave', scopeRef.current.methods?.onLeave);
        }
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .char {
          display: flex;
          overflow: hidden;
        }
        
        .char > span {
          display: flex;
          will-change: transform;
        }
        
        .clip {
          overflow: hidden;
        }
        
        article {
          container-type: flex;
          border-radius: 1cqw;
        }
      `}</style>
      
      <article 
        id="horizontal-split" 
        ref={animationRef}
        className="flex flex-col justify-center items-center pb-1 text-gray-300 transition-colors duration-300 ease-out"
      > 
        <Link 
          href="https://lewisscrimgeour.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={handleClick}
        >
          <h2 className="text-center  text-sm will-change-transform cursor-pointer">
            Lpscrim 
          </h2>
        </Link>
      </article>
    </>
  );
}