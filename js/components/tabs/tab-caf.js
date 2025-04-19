// CAF tab content template
export const TAB_CAF = `
    <section class="form-section">
        <h2>Passagem de Plantão CAF</h2>
        
        <div class="form-group date-shift-group">
            <div class="field-header">
                <label for="dataCAF"><i class="far fa-calendar-alt"></i> Data:</label>
            </div>
            <input type="date" id="dataCAF" name="dataCAF">
        </div>
        
        <div class="form-mode-toggle">
            <label>Modo de Relatório:</label>
            <div class="toggle-buttons">
                <label class="toggle-btn active" for="modeCompleteCAF">
                    <input type="radio" id="modeCompleteCAF" name="reportModeCAF" value="complete" checked>
                    <span><i class="fas fa-list-ul"></i> Completo</span>
                </label>
                <label class="toggle-btn" for="modeExceptionCAF">
                    <input type="radio" id="modeExceptionCAF" name="reportModeCAF" value="exception">
                    <span><i class="fas fa-exclamation-circle"></i> Por Exceção</span>
                </label>
            </div>
            <div class="mode-description">
                <p id="modeDescriptionCAF">Modo completo: registre todas as atividades do CAF.</p>
            </div>
        </div>
        
        <!-- Regular form fields -->
        <div id="caf-form-fields" class="form-mode-section active">
            <div class="form-group">
                <div class="field-header">
                    <label for="notaFiscal"><i class="fas fa-file-invoice"></i> Recebido alguma NF:</label>
                    <button class="clear-field-btn" data-clear="notaFiscal"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="notaFiscal" name="notaFiscal" rows="2" placeholder="Informe se recebeu notas fiscais e seu status"></textarea>
                <div class="smart-suggestions" id="suggestions-notaFiscal"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="medMatCriticos"><i class="fas fa-capsules"></i> Med/Mat críticos:</label>
                    <button class="clear-field-btn" data-clear="medMatCriticos"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="medMatCriticos" name="medMatCriticos" rows="2" placeholder="Informe medicamentos ou materiais em situação crítica"></textarea>
                <div class="smart-suggestions" id="suggestions-medMatCriticos"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="controleTemperatura"><i class="fas fa-thermometer-half"></i> Controle de temperatura:</label>
                    <button class="clear-field-btn" data-clear="controleTemperatura"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="controleTemperatura" name="controleTemperatura" rows="2" placeholder="Informe sobre a temperatura e os registros realizados"></textarea>
                <div class="smart-suggestions" id="suggestions-controleTemperatura"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="pendenciasCAF"><i class="fas fa-tasks"></i> Pendências:</label>
                    <button class="clear-field-btn" data-clear="pendenciasCAF"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="pendenciasCAF" name="pendenciasCAF" rows="2" placeholder="Informe as pendências do CAF"></textarea>
                <div class="smart-suggestions" id="suggestions-pendenciasCAF"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="observacoesGeraisCAF"><i class="fas fa-comment-dots"></i> Observações Gerais:</label>
                    <button class="clear-field-btn" data-clear="observacoesGeraisCAF"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="observacoesGeraisCAF" name="observacoesGeraisCAF" rows="2" placeholder="Observações gerais sobre o plantão no CAF"></textarea>
                <div class="smart-suggestions" id="suggestions-observacoesGeraisCAF"></div>
            </div>
        </div>
        
        <!-- Exception mode form fields -->
        <div id="caf-exception-fields" class="form-mode-section">
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFPendenciasAnteriores"><i class="fas fa-history"></i> Pendências Anteriores:</label>
                    <button class="clear-field-btn" data-clear="excCAFPendenciasAnteriores"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excCAFPendenciasAnteriores" name="excCAFPendenciasAnteriores" rows="2" placeholder="Pendências do plantão anterior"></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFPendenciasAnteriores"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFPendenciasAtuais"><i class="fas fa-exclamation-triangle"></i> Pendências Atuais:</label>
                    <button class="clear-field-btn" data-clear="excCAFPendenciasAtuais"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excCAFPendenciasAtuais" name="excCAFPendenciasAtuais" rows="2" placeholder="Pendências atuais no CAF"></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFPendenciasAtuais"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFProdutosCriticos"><i class="fas fa-exclamation-circle"></i> Produtos Críticos:</label>
                    <button class="clear-field-btn" data-clear="excCAFProdutosCriticos"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excCAFProdutosCriticos" name="excCAFProdutosCriticos" rows="2" placeholder="Produtos em estado crítico no CAF"></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFProdutosCriticos"></div>
            </div>
            
            <div class="form-group">
                <div class="field-header">
                    <label for="excCAFObservacoes"><i class="fas fa-comment-dots"></i> Observações Importantes:</label>
                    <button class="clear-field-btn" data-clear="excCAFObservacoes"><i class="fas fa-eraser"></i> Limpar</button>
                </div>
                <textarea id="excCAFObservacoes" name="excCAFObservacoes" rows="2" placeholder="Observações importantes no CAF"></textarea>
                <div class="smart-suggestions" id="suggestions-excCAFObservacoes"></div>
            </div>
        </div>
    </section>
`;