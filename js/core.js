// Core functionality and application initialization
import { setupTabs } from './tabs.js';
import { setupCheckboxes, setupQuickActions, setupTemplates, setupClearFieldButtons, setupLineNumbering } from './forms.js';
import { loadFormData, setupSaveButton, setupClearButton } from './storage.js';
import { setupPrintButton, updateTimestamp, setupKeyboardShortcuts, setupThemeToggle } from './ui.js';
import { setupSmartSuggestions } from './suggestions.js';

export function initializeApp() {
    // Set default date values to today
    const today = new Date().toISOString().split('T')[0];
    
    // Ensure components are fully loaded before initialization
    setTimeout(() => {
        const dataInput = document.getElementById('data');
        const dataCAFInput = document.getElementById('dataCAF');
        
        if (dataInput) dataInput.value = today;
        if (dataCAFInput) dataCAFInput.value = today;
        
        // Initialize all modules
        setupTabs();
        
        setupKeyboardShortcuts();

        setupThemeToggle();
        
        // Set up form controls with slight delays
        setTimeout(() => {
            setupCheckboxes();
            setupQuickActions();
            setupTemplates();
            setupClearFieldButtons();
            setupSmartSuggestions();
            setupLineNumbering();
            
            // Setup action buttons
            setupSaveButton();
            setupPrintButton();
            setupClearButton();
            
            // Load saved data with a longer delay
            setTimeout(() => {
                loadFormData();
            }, 500);
        }, 300);
    }, 500);
}