
        document.querySelectorAll('.interactive').forEach(item => {
          item.addEventListener('click', function() {
            // Change the fill color to blue to simulate tears
            this.style.fill = "blue";
            this.style.transition = "fill 0.5s ease";  // Optional: Add a smooth transition to the color change
          });
        });
    
      