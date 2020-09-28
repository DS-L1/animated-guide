let start, element;

function step(timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;
    console.log(elapsed);

    // `Math.min()` is used here to make sure that the element stops at exactly 200px.
    element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

    if (elapsed < 2000) { // Stop the animation after 2 seconds
        window.requestAnimationFrame(step);
    }
}
window.addEventListener("load", ()=>{
    element = document.getElementById('root');
    console.log("GET STARTED #2", element)
    window.requestAnimationFrame(step);
})
