// Common pharmacy section template builder
// This utility creates standardized pharmacy section HTML

export function createPharmacySection(id, title, icon, placeholder) {
    return `
    <div class="form-group">
        <div class="field-header">
            <label for="${id}"><i class="fas ${icon}"></i> ${title}:</label>
            <button class="clear-field-btn" data-clear="${id}"><i class="fas fa-eraser"></i> Limpar</button>
        </div>
        <textarea id="${id}" name="${id}" rows="3" placeholder="${placeholder}"></textarea>
        <div class="smart-suggestions" id="suggestions-${id}"></div>
    </div>
    `;
}

