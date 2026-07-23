window.addEventListener('DOMContentLoaded', () => {
    const navigationEntries = performance.getEntriesByType('navigation');
    
    if (navigationEntries.length > 0) {
        const navigationType = navigationEntries[0].type;
        
        if (navigationType === 'reload') {
            alert('vian ganteng');
        }
    }
});

const mybutton = document.getElementById('button');

mybutton.addEventListener("click", function() {
    alert("SELAMAT KAMU KENA PRANK!")
})