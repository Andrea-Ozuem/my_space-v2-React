function isMobile() {
    const minWidth = 1024; // Minimum width for desktop devices
    return window.innerWidth < minWidth || screen.width < minWidth;
}



export { isMobile }