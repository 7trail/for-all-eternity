// Character name prompt functionality
document.addEventListener('DOMContentLoaded', function() {
    const promptOverlay = document.getElementById('character-prompt');
    const mainContent = document.getElementById('main-content');
    const nameInput = document.getElementById('character-name-input');
    const enterButton = document.getElementById('enter-button');
    const greeting = document.getElementById('greeting');
    
    // Handle enter button click
    enterButton.addEventListener('click', function() {
        const characterName = nameInput.value.trim();
        
        if (characterName) {
            showContent(characterName);
        } else {
            // Shake animation for empty input
            nameInput.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                nameInput.style.animation = '';
            }, 500);
        }
    });
    
    // Handle Enter key press
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enterButton.click();
        }
    });
    
    // Function to show main content
    function showContent(characterName) {
        // Fade out the prompt
        promptOverlay.classList.add('fade-out');
        
        // Show main content after prompt fades out
        setTimeout(() => {
            promptOverlay.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
            
            // Set personalized greeting
            greeting.textContent = `May fortune favor you, ${characterName}.`;
            
            // Apply character-specific content
            applyCharacterContent(characterName);
        }, 800);
    }
    
    // Function to apply character-specific content
    function applyCharacterContent(characterName) {
        const normalizedName = characterName.toLowerCase().trim();
        
        const characterContent = [
            {
                charName: 'chariot',
                targetId: 'yukionna-description',
                content: 'Why is it always cold to the northeast?',
                action: 'replace'
            },
            {
                charName: 'chariot',
                targetId: 'fourth-god',
                content: 'Is she what brought you home?',
                action: 'append'
            },
            {
                charName: 'bell',
                targetId: 'bell-name',
                content: 'Bell, whose Fate is Sealed',
                action: 'replace'
            },
            {
                charName: 'umbra',
                targetId: 'launa-name',
                content: 'Umbra, the Forgotten',
                action: 'replace'
            },
            {
                charName: 'umbra',
                targetId: 'umbra-paragraph',
                content: 'You remember the insides of the castle.',
                action: 'replace'
            },
            {
                charName: 'raine',
                targetId: 'umbra-paragraph',
                content: "You went into a hideaway, tunneled deep under a bed. It's the only place you feel safe.",
                action: 'replace'
            },
            {
                charName: 'thatcher',
                targetId: 'umbra-paragraph',
                content: 'You took Bell and found the only place you felt safe.',
                action: 'replace'
            },
            {
                charName: 'bell',
                targetId: 'umbra-paragraph',
                content: 'Thatcher took you by the hand and brought you to shelter.',
                action: 'replace'
            },
            {
                charName: 'raine',
                targetId: 'question-id',
                content: 'Who is the man being held in Castle Altair?',
                action: 'replace'
            },
            {
                charName: 'athena',
                targetId: 'athena-id',
                content: 'You have been disposed of.',
                action: 'replace'
            },
            {
                charName: 'veira',
                targetId: 'athena-id',
                content: 'You have been disposed of.',
                action: 'replace'
            },
            {
                charName: 'yukionna',
                targetId: 'athena-id',
                content: 'You have been disposed of.',
                action: 'replace'
            },
            {
                charName: 'altair',
                targetId: 'athena-id',
                content: "Shouldn't you know what happened to him and Muzzio already?",
                action: 'replace'
            },
            {
                charName: 'launa',
                targetId: 'quote',
                content: "Why don't you be honest with me next time?",
                action: 'replace'
            }
            // Add more characters here as needed
        ];
        
        // Iterate over the array and apply matching content
        characterContent.forEach(entry => {
            if (entry.charName === normalizedName) {
                const targetElement = document.getElementById(entry.targetId);
                if (targetElement) {
                    if (entry.action === 'replace') {
                        // Replace the content with styled text
                        targetElement.innerHTML = `<span class="character-content">${entry.content}</span>`;
                    } else if (entry.action === 'append') {
                        // Append content after existing content
                        const newContent = document.createElement('span');
                        newContent.className = 'character-content';
                        newContent.textContent = ' ' + entry.content;
                        targetElement.appendChild(newContent);
                    }
                }
            }
        });
   
    }
});

// Add shake animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);