// --- FORM CONFIGURATIONS ---
const reportConfigs = {
    performance: {
        title: "Squad | Performance Report",
        icon: "fa-solid fa-gauge-high",
        storageKey: "bugReportPerformance",
        settings: [
            {
                category: "Performance Feedback", fields: [
                    { name: "Feedback", storageName: "performanceFeedback", loadValueFromStorage: true, required: true, type: "textarea", grayText: "e.g., Stutters when too many players are nearby.", resetState: 'non-specific', tooltipText: "Describe the performance issue in detail." },
                    { name: "Framerate Lows", storageName: "framerateLows", loadValueFromStorage: true, required: false, type: "text", grayText: "Lows", resetState: 'non-specific', tooltipText: "Lowest framerate observed." },
                    { name: "Framerate Avg", storageName: "framerateAvg", loadValueFromStorage: true, required: true, type: "text", grayText: "Avg", resetState: 'non-specific', tooltipText: "Average framerate during gameplay." },
                    { name: "Framerate High", storageName: "framerateHigh", loadValueFromStorage: true, required: false, type: "text", grayText: "High", resetState: 'non-specific', tooltipText: "Highest framerate observed." },
                    { name: "Using GPU Framegen?", storageName: "gpuFramegen", loadValueFromStorage: false, required: false, type: "toggle", resetState: 'non-specific', tooltipText: "Is hardware frame generation (e.g., DLSS 3, FSR 3) enabled?" },
                    { name: "Have you cleared cache this test?", storageName: "clearedCache", loadValueFromStorage: false, required: false, type: "toggle", resetState: 'non-specific', tooltipText: "Clearing cache can resolve many issues. Did you do this before the test?" },
                    { name: "Reproducibility", storageName: "reproducibility", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Always", "Sometimes", "Rarely", "Never"], resetState: 'non-specific', tooltipText: "How often can you reproduce this issue?" }
                ]
            },
            {
                category: "Game Details", shared: true, fields: [
                    { name: "Squad Version", storageName: "squadVersion", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., v7.0", resetState: 'specific', tooltipImage: "https://placehold.co/400x100/212529/FFF?text=Check+bottom+right" },
                    { name: "Player Count", storageName: "playerCount", loadValueFromStorage: false, required: true, type: "dropdown", dropdownOptions: ["~10", "~20", "~40", "~60", "~80", "~90", "~98+"], resetState: 'non-specific', tooltipText: "Approximate number of players on the server." },
                    { name: "Map Time", storageName: "mapTime", loadValueFromStorage: false, required: true, type: "dropdown", dropdownOptions: ["Under 10min", "10-15min", "15-20min", "20-30min", "30-40min", "40-60min", "60+ min"], resetState: 'non-specific', tooltipText: "How long had the match been going?" },
                    { name: "Layer & Cords", storageName: "layerCords", loadValueFromStorage: false, required: true, type: "text", grayText: "e.g., Yehorivka RAAS v2, G5", resetState: 'non-specific', tooltipText: "The map layer and your coordinates, if applicable." },
                    { name: "Your Team", storageName: "yourTeam", loadValueFromStorage: false, required: true, type: "text", grayText: "e.g., US Army", resetState: 'non-specific', tooltipText: "The faction you were playing as." },
                    { name: "Enemy Team", storageName: "enemyTeam", loadValueFromStorage: false, required: true, type: "text", grayText: "e.g., Russian Forces", resetState: 'non-specific', tooltipText: "The opposing faction." }
                ]
            },
            {
                category: "Game Graphics", shared: true, fields: [
                    { name: "Display & Resolution", storageName: "displayResolution", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["1920x1080", "2560x1440", "3840x2160", "1280x720", "3440x1440", "Other"], resetState: 'specific', tooltipText: "Your monitor's resolution and display mode (e.g., Fullscreen)." },
                    { name: "Selected Preset", storageName: "selectedPreset", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Low", "Medium", "High", "Epic", "Custom"], resetState: 'specific', tooltipText: "The graphics quality preset selected in the game options." },
                    { name: "Preset Modifications", storageName: "presetModifications", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., Shadows low, AA off", resetState: 'specific', tooltipText: "Any changes made to the selected graphics preset." }
                ]
            },
            {
                category: "System", shared: true, fields: [
                    { name: "CPU", storageName: "cpu", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., AMD Ryzen 5 5600X", resetState: 'specific', tooltipText: "Your computer's processor model." },
                    { name: "Ram/Speed", storageName: "ramSpeed", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., 16GB DDR4 3600MHz", resetState: 'specific', tooltipText: "The amount and speed of your system's RAM." },
                    { name: "Operating System", storageName: "operatingSystem", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Windows 11", "Windows 10", "Linux", "Other"], resetState: 'specific', tooltipText: "The operating system your computer is running." },
                    { name: "GPU Model", storageName: "gpuModel", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., AMD RX 6800 XT", resetState: 'specific', tooltipText: "Your graphics card model." },
                    { name: "GPU Driver Version", storageName: "gpuDriverVersion", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., 24.4.1", resetState: 'specific', tooltipText: "The version of your installed graphics driver." }
                ]
            }
        ]
    },
    mapping: {
        title: "Squad | Mapping/Assets/UI Report",
        icon: "fa-solid fa-map-location-dot",
        storageKey: "bugReportMapping",
        settings: [
            {
                category: "Mapping/Asset", fields: [
                    { name: "Describe", storageName: "describe", loadValueFromStorage: true, required: true, type: "textarea", grayText: "What you're seeing, if possible way to reproduce it.", resetState: 'non-specific', tooltipText: "Provide a detailed description of the visual or audio bug." },
                    { name: "Can you reproduce it?", storageName: "reproduceSteps", loadValueFromStorage: true, required: false, type: "textarea", grayText: "Describe how so, or leave empty.", resetState: 'non-specific', tooltipText: "Provide steps to reproduce the issue, if known." },
                    { name: "Have you cleared cache this test?", storageName: "clearedCache", loadValueFromStorage: false, required: false, type: "toggle", resetState: 'non-specific', tooltipText: "Did you clear your game cache before observing this issue?" },
                    { name: "Asset Type", storageName: "assetType", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Map/Textures", "Characters/Animations", "Weapons/Animations", "Sounds", "User Interface / Menus"], resetState: 'non-specific', tooltipText: "Select the type of asset that has an issue." }

                ]
            },
            {
                category: "Game Details", shared: true, fields: [
                    { name: "Squad Version", storageName: "squadVersion", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., v7.0", resetState: 'specific', tooltipImage: "https://placehold.co/400x100/212529/FFF?text=Check+bottom+right" },
                    { name: "Player Count", storageName: "playerCount", loadValueFromStorage: false, required: false, type: "dropdown", dropdownOptions: ["~10", "~20", "~40", "~60", "~80", "~90", "~98+"], resetState: 'non-specific', tooltipText: "Approximate number of players on the server." },
                    { name: "Map Time", storageName: "mapTime", loadValueFromStorage: false, required: false, type: "dropdown", dropdownOptions: ["Under 10min", "10-15min", "15-20min", "20-30min", "30-40min", "40-60min", "60+ min"], resetState: 'non-specific', tooltipText: "How long had the match been going?" },
                    { name: "Layer & Cords", storageName: "layerCords", loadValueFromStorage: false, required: false, type: "text", grayText: "e.g., Yehorivka RAAS v2, G5", resetState: 'non-specific', tooltipText: "The map layer and your coordinates, if applicable." },
                    { name: "Your Team", storageName: "yourTeam", loadValueFromStorage: false, required: false, type: "text", grayText: "e.g., US Army", resetState: 'non-specific', tooltipText: "The faction you were playing as." },
                    { name: "Enemy Team", storageName: "enemyTeam", loadValueFromStorage: false, required: false, type: "text", grayText: "e.g., Russian Forces", resetState: 'non-specific', tooltipText: "The opposing faction." }
                ]
            },
            {
                category: "Game Graphics", shared: true, fields: [
                    { name: "Display & Resolution", storageName: "displayResolution", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["1920x1080", "2560x1440", "3840x2160", "1280x720", "3440x1440", "Other"], resetState: 'specific', tooltipText: "Your monitor's resolution and display mode (e.g., Fullscreen)." },
                    { name: "Selected Preset", storageName: "selectedPreset", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Low", "Medium", "High", "Epic", "Custom"], resetState: 'specific', tooltipText: "The graphics quality preset selected in the game options." },
                    { name: "Preset Modifications", storageName: "presetModifications", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., Shadows low, AA off", resetState: 'specific', tooltipText: "Any changes made to the selected graphics preset." }
                ]
            },
            {
                category: "System", shared: true, fields: [
                    { name: "CPU", storageName: "cpu", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., AMD Ryzen 5 5600X", resetState: 'specific', tooltipText: "Your computer's processor model." },
                    { name: "Ram/Speed", storageName: "ramSpeed", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., 16GB DDR4 3600MHz", resetState: 'specific', tooltipText: "The amount and speed of your system's RAM." },
                    { name: "Operating System", storageName: "operatingSystem", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Windows 10", "Windows 11", "Linux", "Other"], resetState: 'specific', tooltipText: "The operating system your computer is running." },
                    { name: "GPU Model", storageName: "gpuModel", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., AMD RX 6800 XT", resetState: 'specific', tooltipText: "Your graphics card model." },
                    { name: "GPU Driver Version", storageName: "gpuDriverVersion", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., 24.4.1", resetState: 'specific', tooltipText: "The version of your installed graphics driver." }
                ]
            }
        ]
    },
    crashes: {
        title: "Squad | Crash Report",
        icon: "fa-solid fa-skull-crossbones",
        storageKey: "bugReportCrashes",
        settings: [
            {
                category: "Crash Feedback", fields: [
                    { name: "What were you doing at time of the crash:", storageName: "crashAction", loadValueFromStorage: true, required: true, type: "textarea", grayText: "e.g., Vaulting over a wall, opening the map...", resetState: 'non-specific', tooltipText: "Describe the actions you took right before the game crashed." },
                    { name: "Have you cleared cache?", storageName: "clearedCache", loadValueFromStorage: false, required: false, type: "toggle", resetState: 'non-specific', tooltipText: "Did you clear your game cache before experiencing this crash?" },
                    { name: "How frequent is this crash?", storageName: "crashFrequency", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["First Time", "Multiple Crashes (Match)", "~Nearly Every Match", "1 in 3 Matches", "1 in 6 Matches", "1 in 10+ matches"], resetState: 'non-specific', tooltipText: "How often does this specific crash occur?" }
                ]
            },
            {
                category: "Game Details", shared: true, fields: [
                    { name: "Squad Version", storageName: "squadVersion", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., v7.0", resetState: 'specific', tooltipImage: "https://placehold.co/400x100/212529/FFF?text=Check+bottom+right" },
                    { name: "Player Count", storageName: "playerCount", loadValueFromStorage: false, required: true, type: "dropdown", dropdownOptions: ["~10", "~20", "~40", "~60", "~80", "~90", "~98+"], resetState: 'non-specific', tooltipText: "Approximate number of players on the server." },
                    { name: "Map Time", storageName: "mapTime", loadValueFromStorage: false, required: true, type: "dropdown", dropdownOptions: ["Under 10min", "10-15min", "15-20min", "20-30min", "30-40min", "40-60min", "60+ min"], resetState: 'non-specific', tooltipText: "How long had the match been going?" },
                    { name: "Layer & Cords", storageName: "layerCords", loadValueFromStorage: false, required: false, type: "text", grayText: "e.g., Yehorivka RAAS v2, G5", resetState: 'non-specific', tooltipText: "The map layer and your coordinates, if applicable." },
                    { name: "Your Team", storageName: "yourTeam", loadValueFromStorage: false, required: false, type: "text", grayText: "e.g., US Army", resetState: 'non-specific', tooltipText: "The faction you were playing as." },
                    { name: "Enemy Team", storageName: "enemyTeam", loadValueFromStorage: false, required: false, type: "text", grayText: "e.g., Russian Forces", resetState: 'non-specific', tooltipText: "The opposing faction." }
                ]
            },
            {
                category: "Game Graphics", shared: true, fields: [
                    { name: "Display & Resolution", storageName: "displayResolution", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["1920x1080", "2560x1440", "3840x2160", "1280x720", "3440x1440", "Other"], resetState: 'specific', tooltipText: "Your monitor's resolution and display mode (e.g., Fullscreen)." },
                    { name: "Selected Preset", storageName: "selectedPreset", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Low", "Medium", "High", "Epic", "Custom"], resetState: 'specific', tooltipText: "The graphics quality preset selected in the game options." },
                    { name: "Preset Modifications", storageName: "presetModifications", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., Shadows low, AA off", resetState: 'specific', tooltipText: "Any changes made to the selected graphics preset." }
                ]
            },
            {
                category: "System", shared: true, fields: [
                    { name: "CPU", storageName: "cpu", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., AMD Ryzen 5 5600X", resetState: 'specific', tooltipText: "Your computer's processor model." },
                    { name: "Ram/Speed", storageName: "ramSpeed", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., 16GB DDR4 3600MHz", resetState: 'specific', tooltipText: "The amount and speed of your system's RAM." },
                    { name: "Operating System", storageName: "operatingSystem", loadValueFromStorage: true, required: true, type: "dropdown", dropdownOptions: ["Windows 10", "Windows 11", "Linux", "Other"], resetState: 'specific', tooltipText: "The operating system your computer is running." },
                    { name: "GPU Model", storageName: "gpuModel", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., AMD RX 6800 XT", resetState: 'specific', tooltipText: "Your graphics card model." },
                    { name: "GPU Driver Version", storageName: "gpuDriverVersion", loadValueFromStorage: true, required: true, type: "text", grayText: "e.g., 24.4.1", resetState: 'specific', tooltipText: "The version of your installed graphics driver." }
                ]
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Define the app version inside the listener to ensure it's always in scope.
    const appVersion = "1.2"; // <-- Make sure this is a NEWER version

    // --- VERSION CHECK ---
    const storedVersion = localStorage.getItem('storageVersion');

    // ADD THIS LINE FOR DEBUGGING:
    console.log('VERSION_CHECK', { stored: storedVersion, app: appVersion });

    if (storedVersion !== appVersion) {
        console.warn(`Storage version mismatch. Found: ${storedVersion || 'none'}, Required: ${appVersion}. Wiping application data.`);

        // Preserve the user's theme setting before clearing everything else.
        const currentTheme = localStorage.getItem('bugReportTheme');

        // Clear all stored data from the domain.
        localStorage.clear();

        // Now, restore the theme and set the new storage version.
        localStorage.setItem('storageVersion', appVersion);
        if (currentTheme) {
            localStorage.setItem('bugReportTheme', currentTheme);
        }
    }

    // --- STATE ---
    let currentReportType = 'performance';
    let isInitialLoad = true;

    // --- DOM Elements ---
    const getEl = (id) => document.getElementById(id);
    const loader = getEl('loader-wrapper');
    const themeToggle = getEl('theme-toggle');
    const body = document.body;
    const formContainer = getEl('report-form');
    const mainTitle = getEl('main-title');
    const reportTypeSelector = getEl('report-type-selector');
    const saveBtn = getEl('save-report');
    const resetCurrentBtn = getEl('reset-current');
    const resetAllBtn = getEl('reset-all');
    const exportBtn = getEl('export-report');
    const validationAlert = getEl('validation-alert');

    // --- FORM RENDERING ---
    const renderForm = (reportType) => {
        const config = reportConfigs[reportType].settings;
        formContainer.innerHTML = ''; // Clear previous form

        config.forEach(category => {
            const group = document.createElement('div');
            group.className = 'info-group';
            let fieldsHtml = `<h5 class="mb-3">${category.category}</h5><div class="row g-3">`;

            if (category.category === "Performance Feedback") {
                const perfField = category.fields.find(f => f.storageName === 'performanceFeedback');
                const cacheField = category.fields.find(f => f.storageName === 'clearedCache');
                const reproField = category.fields.find(f => f.storageName === 'reproducibility');
                const framerateFields = category.fields.filter(f => f.name.includes("Framerate"));
                const framegenField = category.fields.find(f => f.storageName === 'gpuFramegen');

                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(perfField)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(cacheField)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(reproField)}</div>`;

                if (framerateFields.length > 0) {
                    fieldsHtml += `<div class="col-md-6 mb-2"><div class="row g-2 align-items-end">`;
                    fieldsHtml += `<div class="col-7"><label class="form-label fw-bold">Framerate</label><div class="row g-2">`;
                    const orderedFields = ["framerateHigh", "framerateAvg", "framerateLows"];
                    orderedFields.forEach(fieldName => {
                        const field = framerateFields.find(f => f.storageName === fieldName);
                        if (field) { fieldsHtml += `<div class="col-4">${renderField(field, true)}</div>`; }
                    });
                    fieldsHtml += `</div></div>`; // Close framerate row and col-7
                    if (framegenField) {
                        fieldsHtml += `<div class="col-5">${renderField(framegenField)}</div>`;
                    }
                    fieldsHtml += `</div></div>`; // Close outer row
                }

            } else if (category.category === "Game Details") {
                const squadVersion = category.fields.find(f => f.storageName === 'squadVersion');
                const layerCords = category.fields.find(f => f.storageName === 'layerCords');
                const playerCount = category.fields.find(f => f.storageName === 'playerCount');
                const yourTeam = category.fields.find(f => f.storageName === 'yourTeam');
                const enemyTeam = category.fields.find(f => f.storageName === 'enemyTeam');
                const mapTime = category.fields.find(f => f.storageName === 'mapTime');

                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(squadVersion)}</div>`;
                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(layerCords)}</div>`;
                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(playerCount)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(yourTeam)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(enemyTeam)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(mapTime)}</div>`;

            } else if (category.category === "Game Graphics") {
                const displayResolution = category.fields.find(f => f.storageName === 'displayResolution');
                const selectedPreset = category.fields.find(f => f.storageName === 'selectedPreset');
                const presetModifications = category.fields.find(f => f.storageName === 'presetModifications');

                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(displayResolution)}</div>`;
                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(selectedPreset)}</div>`;
                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(presetModifications)}</div>`;

            } else if (category.category === "System") {
                const cpu = category.fields.find(f => f.storageName === 'cpu');
                const ramSpeed = category.fields.find(f => f.storageName === 'ramSpeed');
                const operatingSystem = category.fields.find(f => f.storageName === 'operatingSystem');
                const gpuModel = category.fields.find(f => f.storageName === 'gpuModel');
                const gpuDriverVersion = category.fields.find(f => f.storageName === 'gpuDriverVersion');

                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(cpu)}</div>`;
                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(ramSpeed)}</div>`;
                fieldsHtml += `<div class="col-md-4 mb-2">${renderField(operatingSystem)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(gpuModel)}</div>`;
                fieldsHtml += `<div class="col-md-6 mb-2">${renderField(gpuDriverVersion)}</div>`;
            }
            else { // Default layout for Mapping and Crashes
                category.fields.forEach(field => { fieldsHtml += `<div class="col-md-6 mb-2">${renderField(field)}</div>`; });
            }

            fieldsHtml += `</div>`;
            group.innerHTML = fieldsHtml;
            formContainer.appendChild(group);
        });
    };

    const renderField = (field, isInline = false) => {
        if (!field) return '';
        const id = field.storageName;
        const requiredStar = field.required ? ' <span class="text-danger">*</span>' : '';
        let fieldHtml = '';

        if (!isInline) {
            fieldHtml += `<label for="${id}" class="form-label fw-bold">${field.name}${requiredStar}`;
            if (field.tooltipText || field.tooltipImage) {
                fieldHtml += `<span class="tooltip-icon"><i class="fa-regular fa-circle-question"></i><div class="tooltip-content">`;
                if (field.tooltipImage) fieldHtml += `<img src="${field.tooltipImage}" alt="Tooltip">`;
                if (field.tooltipText) fieldHtml += `<p class="m-1">${field.tooltipText}</p>`;
                fieldHtml += `</div></span>`;
            }
            fieldHtml += `</label>`;
        }

        switch (field.type) {
            case 'textarea':
                fieldHtml += `<textarea class="form-control" id="${id}" rows="3" placeholder="${field.grayText || ''}"></textarea>`;
                break;
            case 'checkbox':
                fieldHtml += `<div class="form-check mt-2"><input class="form-check-input" type="checkbox" id="${id}"><label class="form-check-label" for="${id}"> Yes</label></div>`;
                break;
            case 'toggle':
                fieldHtml += `<div class="btn-group w-100" role="group" id="${id}"><button type="button" class="btn btn-outline-primary">Yes</button><button type="button" class="btn btn-outline-primary active">No</button></div>`;
                break;
            case 'dropdown':
                fieldHtml += `<select class="form-select placeholder-selected" id="${id}" required="${field.required}"><option value="" disabled selected>Select...</option>`;
                field.dropdownOptions.forEach(opt => { fieldHtml += `<option value="${opt}">${opt}</option>`; });
                fieldHtml += `</select>`;
                break;
            default:
                fieldHtml += `<input type="text" class="form-control" id="${id}" placeholder="${field.grayText || ''}">`;
                break;
        }

        return fieldHtml;
    };

    // --- THEME ---
    const applyTheme = (theme) => {
        body.classList.toggle('dark-mode', theme === 'dark');
        loader.className = theme;
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    };
    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('bugReportTheme', newTheme);
        applyTheme(newTheme);
    });

    // --- DATA HANDLING ---
    const saveReportData = () => {
        const config = reportConfigs[currentReportType];
        const reportData = {};
        const sharedData = {};
        config.settings.forEach(cat => {
            const targetData = cat.shared ? sharedData : reportData;
            cat.fields.forEach(field => {
                if (field.loadValueFromStorage) {
                    const el = getEl(field.storageName);
                    if (el) {
                        let value;
                        if (field.type === 'checkbox') value = el.checked;
                        else if (field.type === 'toggle') value = el.querySelector('.active')?.textContent || 'No';
                        else value = el.value;
                        targetData[field.storageName] = value;
                    }
                }
            });
        });
        localStorage.setItem(config.storageKey, JSON.stringify(reportData));
        localStorage.setItem('bugReportShared', JSON.stringify(sharedData));
        // Write the current app version to storage to verify on next load.
        localStorage.setItem('storageVersion', appVersion);
    };

    const loadReportData = () => {
        const config = reportConfigs[currentReportType];
        const reportData = JSON.parse(localStorage.getItem(config.storageKey) || '{}');
        const sharedData = JSON.parse(localStorage.getItem('bugReportShared') || '{}');
        const allData = { ...sharedData, ...reportData };

        config.settings.forEach(cat => {
            cat.fields.forEach(field => {
                if (field.loadValueFromStorage) {
                    const el = getEl(field.storageName);
                    const valueToLoad = allData[field.storageName];
                    if (el && valueToLoad !== undefined) {
                        if (el.type === 'checkbox') el.checked = valueToLoad;
                        else if (field.type === 'toggle') {
                            el.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                            const btnToActivate = Array.from(el.querySelectorAll('button')).find(b => b.textContent === valueToLoad);
                            if (btnToActivate) btnToActivate.classList.add('active');
                        }
                        else el.value = valueToLoad;
                    }
                }
            });
        });

        formContainer.querySelectorAll('select').forEach(el => {
            el.classList.toggle('placeholder-selected', !el.value);
        });
    };

    // --- VALIDATION ---
    const validateForm = () => {
        let isValid = true;
        let errorMessages = [];
        validationAlert.classList.add('d-none');
        formContainer.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        reportConfigs[currentReportType].settings.forEach(cat => {
            cat.fields.forEach(field => {
                if (field.required) {
                    const el = getEl(field.storageName);
                    if (!el || (el.type !== 'checkbox' && !el.value)) {
                        isValid = false;
                        if (el) el.classList.add('is-invalid');
                        errorMessages.push(field.name);
                    }
                }
            });
        });
        if (!isValid) {
            validationAlert.innerHTML = `<strong>Error:</strong> Please fill out the following required fields: ${errorMessages.join(', ')}.`;
            validationAlert.classList.remove('d-none');
        }
        return isValid;
    };

    // --- ACTIONS ---
    const animateButton = (button, iconClass, text) => {
        const originalHtml = button.innerHTML;
        button.innerHTML = `<i class="${iconClass} me-2"></i>${text}`;
        button.disabled = true;
        setTimeout(() => { button.innerHTML = originalHtml; button.disabled = false; }, 1500);
    };

    saveBtn.addEventListener('click', () => {
        saveReportData();
        animateButton(saveBtn, 'fa-solid fa-check', 'Saved!');
    });

    resetCurrentBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset the non-specific fields for this report type?')) {
            const config = reportConfigs[currentReportType];
            localStorage.removeItem(config.storageKey);
            localStorage.removeItem(`lastCopied_${currentReportType}`);

            config.settings.forEach(cat => {
                cat.fields.forEach(field => {
                    if (field.resetState === 'non-specific') {
                        const el = getEl(field.storageName);
                        if (el) {
                            if (el.type === 'checkbox') el.checked = false;
                            else if (el.tagName === 'SELECT') el.selectedIndex = 0;
                            else if (field.type === 'toggle') {
                                el.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                                el.querySelector('button:last-child').classList.add('active');
                            }
                            else el.value = '';
                        }
                    }
                });
            });
        }
    });

    resetAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear ALL saved data for ALL report types? This will reload the page.')) {
            Object.keys(reportConfigs).forEach(key => {
                localStorage.removeItem(reportConfigs[key].storageKey);
                localStorage.removeItem(`lastCopied_${key}`);
            });
            localStorage.removeItem('bugReportShared');
            location.reload();
        }
    });

    const generateMarkdown = (timestamp) => {
        let markdown = `# ${reportConfigs[currentReportType].title}\n`;
        const nonSharedCategories = reportConfigs[currentReportType].settings.filter(c => !c.shared);
        const sharedCategories = reportConfigs[currentReportType].settings.filter(c => c.shared);
    
        // --- Non-Shared Categories Processing ---
        nonSharedCategories.forEach(cat => {
            markdown += `\n**${cat.category}**\n`;
            cat.fields.forEach(field => {
                const el = getEl(field.storageName);
                if (el) {
                    // Combine Framerate fields and Framegen field into one line
                    if (field.storageName === 'framerateAvg') {
                        const lows = getEl('framerateLows')?.value || 'N/A';
                        const avg = getEl('framerateAvg')?.value || 'N/A';
                        const high = getEl('framerateHigh')?.value || 'N/A';
                        const framegen = getEl('gpuFramegen')?.querySelector('.active')?.textContent || 'No';
                        markdown += `- **Framerate:** Lows \`\`${lows} FPS\`\` | Avg \`\`${avg} FPS\`\` | High \`\`${high} FPS\`\` | Framegen: \`\`${framegen}\`\`\n`;
                    }
                    // Skip the individual Framerate/Framegen fields since they are now combined
                    else if (field.name.includes('Framerate') || field.storageName === 'gpuFramegen') {
                        // Do nothing, already processed.
                    }
                    // Process all other non-shared fields
                    else {
                        let value;
                        if (field.type === 'checkbox') value = el.checked ? 'Yes' : 'No';
                        else if (field.type === 'toggle') value = el.querySelector('.active')?.textContent || 'No';
                        else value = el.value || 'N/A';
    
                        // Performance Feedback - Feedback field.
                        if (field.type === 'textarea' && value && value !== 'N/A') {
                           markdown += `- **${field.name}:** ${value}\n`;
                        } else {
                           markdown += `- **${field.name}:** ${value}\n`;
                        }
                    }
                }
            });
        });
    
        // --- Shared Categories Processing ---
        sharedCategories.forEach(cat => {
            markdown += `\n**${cat.category}**\n`;
            const getVal = (name) => getEl(name)?.value || 'N/A';
    
            // Handle specific categories with custom layouts
            if (cat.category === "Game Details") {
                markdown += `> - **Squad Version:** ${getVal('squadVersion')}\n`;
                markdown += `> - **Match State:** Players \`\`${getVal('playerCount')}\`\` Map Time: \`\`${getVal('mapTime')}\`\`\n`;
                markdown += `> - **Layer & Cords:** ${getVal('layerCords')}\n`;
                markdown += `> - **Your Team:** \`\`${getVal('yourTeam')}\`\`\n`;
                markdown += `> - **Enemy Team:** \`\`${getVal('enemyTeam')}\`\`\n`;
            } else if (cat.category === "Game Graphics") {
                const display = getVal('displayResolution');
                const preset = getVal('selectedPreset');
                const mods = getVal('presetModifications');
                markdown += `> - **Display & Resolution:** ${display}\n`;
                markdown += `> - **Select Preset:** \`\`${preset}\`\` **Modifications:** \`\`${mods}\`\`\n`;
            } else if (cat.category === "System") {
                markdown += `> - **CPU:** ${getVal('cpu')}\n`;
                markdown += `> - **Ram/Speed:** ${getVal('ramSpeed')}\n`;
                markdown += `> - **Operating System:** ${getVal('operatingSystem')}\n`;
                markdown += `> - **GPU / Driver:** \`\`${getVal('gpuModel')} / ${getVal('gpuDriverVersion')}\`\`\n`;
            } else { // Fallback for any other shared categories
                cat.fields.forEach(field => {
                    const el = getEl(field.storageName);
                    if (el) {
                        const value = el.value || 'N/A';
                        markdown += `> - **${field.name}:** ${value}\n`;
                    }
                });
            }
        });
    
        markdown += `\n-# Generated with [reporter.syfusion.com | Maintainer Unn. Synarion](https://reporter.syfusion.com/squad/generator) | Reports Made Easier <3 | Generated On <t:${timestamp}:F>\n**Evidence Link/Attached Below**`;
        return markdown;
    };

    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            return true;
        } catch (err) {
            console.error('Failed to copy text: ', err);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    };

    exportBtn.addEventListener('click', () => {
        if (!validateForm()) return;

        // When exporting, also save the current data and update the version stamp
        // to ensure the stored data is up-to-date with what was exported.
        saveReportData();

        const timestamp = Math.floor(Date.now() / 1000);
        const markdownOutput = generateMarkdown(timestamp);
        if (copyToClipboard(markdownOutput)) {
            localStorage.setItem(`lastCopied_${currentReportType}`, markdownOutput);
            animateButton(exportBtn, 'fa-solid fa-check', 'Copied!');
        } else {
            alert('Failed to copy report to clipboard.');
        }
    });

    // --- INITIALIZATION ---
    const switchReportType = (reportType) => {
        if (!isInitialLoad) {
            saveReportData();
        }
        currentReportType = reportType;
        const config = reportConfigs[reportType];
        mainTitle.innerHTML = `<i class="${config.icon} me-2"></i>${config.title}`;
        document.title = config.title;
        reportTypeSelector.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.reportType === reportType);
        });
        renderForm(reportType);
        loadReportData();
        validationAlert.classList.add('d-none');
    };

    reportTypeSelector.addEventListener('click', (e) => {
        if (e.target.matches('[data-report-type]')) {
            switchReportType(e.target.dataset.reportType);
        }
    });

    formContainer.addEventListener('click', (e) => {
        if (e.target.matches('.btn-group .btn')) {
            const group = e.target.parentElement;
            group.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    formContainer.addEventListener('change', (e) => {
        if (e.target.tagName === 'SELECT') {
            e.target.classList.toggle('placeholder-selected', !e.target.value);
        }
    });

    const init = () => {
        // Because the version check runs first, any stored theme may have been wiped.
        // We default to 'dark' if no theme is found.
        const savedTheme = localStorage.getItem('bugReportTheme') || 'dark';
        applyTheme(savedTheme);
        switchReportType('performance');
        isInitialLoad = false;
        body.classList.remove('is-loading');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    };

    init();
});