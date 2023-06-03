import React from "react";

export default function customCursor(cursorElem: React.RefObject<HTMLElement>, cursorOutlineElem: React.RefObject<HTMLElement>) {
    const cursorDot = cursorElem.current;
    const cursorDotOutline = cursorOutlineElem.current;
    

    if (cursorDot !== null && cursorDotOutline !== null) {
        const delay = 8;
        let _x = 0
        let _y = 0;
        let endX = window.innerWidth / 2;
        let endY = window.innerHeight / 2;
        let visibleCursor = true;
        let enlargedCursor = false
        let dotSize = cursorDot.offsetWidth;
        let outlineSize = cursorDotOutline.offsetWidth;
    
        const init = () => {
            setUpEventListenser();
            animateCursorDotOutline();
        }
        
        const setUpEventListenser = () => {
            // Enlarge when hovering on anchor tags
            document.querySelectorAll('a').forEach(elem => {
                elem.addEventListener("mouseover", () => {
                    enlargedCursor = true;
                    toggleCursorSize()
                });
                elem.addEventListener("mouseout", () => {
                    enlargedCursor = false;
                    toggleCursorSize()
                });
            });


            // Minimise outline when element is clicked
            document.addEventListener("mousedown", () => {
                enlargedCursor = true;
                toggleCursorSize();
            });
            document.addEventListener("mouseup", () => {
                enlargedCursor = false;
                toggleCursorSize();
            });

            // Position custom cursor when real cursor is
            document.addEventListener("mousemove", (e) => {
                // Show cursor
                visibleCursor = true;
                toggleCursorVisibilty();

                // position
                endX = e.pageX
                endY = e.pageY
                cursorDot.style.top = `${endY}px`;
                cursorDot.style.left = `${endX}px`;
            });

            // Hide/show custom cursor
            document.addEventListener("mouseenter", (e) => {
                visibleCursor = true;
                toggleCursorVisibilty();
                cursorDot.style.opacity = "1";
                cursorDotOutline.style.opacity = "1";
            });
             // Hide/show custom cursor
             document.addEventListener("mouseleave", (e) => {
                visibleCursor = false;
                toggleCursorVisibilty();
                cursorDot.style.opacity = "0";
                cursorDotOutline.style.opacity = "0";
            });

        }

        const animateCursorDotOutline = () => {
            _x += (endX - _x) / delay;
            _y += (endY - _y) / delay;
            cursorDotOutline.style.top = `${_y}px`;
            cursorDotOutline.style.left = `${_x}px`;

            window.requestAnimationFrame(animateCursorDotOutline)
        }

        const toggleCursorSize = () => {
            if (enlargedCursor) {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                cursorDotOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            } else {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDotOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }

        const toggleCursorVisibilty = () => {
            if (visibleCursor) {
                cursorDot.style.opacity = "1";
                cursorDotOutline.style.opacity = "1";
            } else {
                cursorDot.style.opacity = "0";
                cursorDotOutline.style.opacity = "0";
            }
        }


        // initialize custom cursor movement
        init()
    }
}