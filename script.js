window.addEventListener('DOMContentLoaded', () => {
    const navigationEntries = performance.getEntriesByType('navigation');
    
    if (navigationEntries.length > 0) {
        const navigationType = navigationEntries[0].type;
        
        if (navigationType === 'reload') {
            alert('vian ganteng');
        }
    }
});
