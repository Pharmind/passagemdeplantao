// Header component
const HEADER_COMPONENT = `
    <header>
        <h1><i class="fas fa-pills"></i> Passagem de Plantão Farmacêutico V2</h1>
    </header>
    <div class="keyboard-hint">
        <span><i class="fas fa-keyboard"></i> Dica: Ctrl+Enter para salvar rapidamente</span>
    </div>
`;

/**
 * Loads the header component into the specified container
 */
export function loadHeaderComponent() {
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = HEADER_COMPONENT;
    } else {
        console.error("Header container not found");
    }
}