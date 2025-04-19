// Satelites tab content template
export const TAB_SATELITES = `
    <section class="form-section">
        <h2>Passagem de Plantão Satélites e Central</h2>
        
        <div class="form-group date-shift-group">
            <div class="date-container">
                <label for="data"><i class="far fa-calendar-alt"></i> Data:</label>
                <input type="date" id="data" name="data">
            </div>
            
            <div class="radio-group">
                <label class="radio-container">
                    <input type="radio" name="turno" value="diurno" checked>
                    <span class="radio-label"><i class="fas fa-sun"></i> Diurno</span>
                </label>
                <label class="radio-container">
                    <input type="radio" name="turno" value="noturno">
                    <span class="radio-label"><i class="fas fa-moon"></i> Noturno</span>
                </label>
            </div>
        </div>
        
        <div class="form-mode-toggle">
            <label>Modo de Relatório:</label>
            <div class="toggle-buttons">
                <label class="toggle-btn active" for="modeComplete">
                    <input type="radio" id="modeComplete" name="reportMode" value="complete" checked>
                    <span><i class="fas fa-list-ul"></i> Completo</span>
                </label>
                <label class="toggle-btn" for="modeException">
                    <input type="radio" id="modeException" name="reportMode" value="exception">
                    <span><i class="fas fa-exclamation-circle"></i> Por Exceção</span>
                </label>
            </div>
            <div class="mode-description">
                <p id="modeDescription">Modo completo: registre todas as atividades do plantão.</p>
            </div>
        </div>
        
        <!-- Regular form fields -->
        <div id="satelites-form-fields" class="form-mode-section active"></div>
        
        <!-- Exception mode form fields -->
        <div id="satelites-exception-fields" class="form-mode-section">
            <div class="form-group">
                <div class="field-header">
                    <label for="excPendenciasAnteriores"><i class="fas fa-history"></i> Pendências do Plantão Anterior:</label>
                    <button class="clear-field-btn" data-clear="excPendenciasAnteriores"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excPendenciasAnteriores" rows="2" placeholder="Liste as pendências do plantão anterior e se foram resolvidas..."></textarea>
                <div class="smart-suggestions" id="suggestions-excPendenciasAnteriores"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excSatelitesPendencias"><i class="fas fa-exclamation-triangle"></i> Pendências nas Satélites:</label>
                    <button class="clear-field-btn" data-clear="excSatelitesPendencias"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excSatelitesPendencias" rows="2" placeholder="Liste apenas as pendências nas farmácias satélites..."></textarea>
                <div class="smart-suggestions" id="suggestions-excSatelitesPendencias"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excProdutosCriticos"><i class="fas fa-exclamation-circle"></i> Produtos Críticos:</label>
                    <button class="clear-field-btn" data-clear="excProdutosCriticos"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excProdutosCriticos" rows="2" placeholder="Liste apenas produtos em estado crítico de estoque..."></textarea>
                <div class="smart-suggestions" id="suggestions-excProdutosCriticos"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excObservacoes"><i class="fas fa-comment-dots"></i> Observações Importantes:</label>
                    <button class="clear-field-btn" data-clear="excObservacoes"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excObservacoes" rows="2" placeholder="Observações importantes ou intercorrências durante o plantão..."></textarea>
                <div class="smart-suggestions" id="suggestions-excObservacoes"></div>
            </div>
        </div>
        <div class="templates-section" style="display: none;">
            <label><i class="fas fa-file-medical"></i> Carregar modelo:</label>
            <select class="template-selector" data-target="allSections">
                <option value="">Selecione um modelo...</option>
                <option value="Kits montados, medicamentos controlados repostos, controle de temperatura realizado.">Padrão Completo</option>
            </select>
        </div>
    </section>
`;