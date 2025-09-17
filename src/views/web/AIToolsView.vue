<template>
  <div class="ai-tools-page">
     <navcomponent></navcomponent>
    <!-- Navigation Bar -->
    <!-- <nav class="navbar navbar-expand-lg navbar-dark mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          <i class="bi bi-graph-up me-2"></i>
          {{ traderInfo.homeTopTitle || 'AI Trading Platform' }}
        </a>
        <div class="navbar-nav ms-auto">
          <a href="/" class="back-btn">
            <i class="bi bi-arrow-left"></i>
            Back to Home
          </a>
        </div>
      </div>
    </nav> -->

    <!-- AI Header -->
    <div class="ai-header">
      <div class="container">
        <h1><i class="bi bi-robot"></i> AI Trading Tools</h1>
        <p>Advanced AI-powered stock analysis and selection tools</p>
      </div>
    </div>

    <div class="container ai-tools-container">
      <!-- AI Stock Picker -->
      <div class="ai-tool-card">
        <div class="tool-header">
          <div class="tool-icon">
            <i class="bi bi-stars"></i>
          </div>
          <div class="tool-title">
            <h3>AI Smart Stock Picker</h3>
            <p>Intelligent stock selection based on market data, technical analysis, and AI algorithms</p>
          </div>
          <div>
            <a href="/ai-history" style="color: #ffffff;">AI history data</a>
          </div>
        </div>
        
        <div class="tool-content">
          <div class="input-section">
            <h4><i class="bi bi-sliders"></i> Selection Criteria</h4>
            
            <label class="form-label">Market Sector</label>
            <select class="form-select" v-model="stockPickerCriteria.sector">
              <option value="">All Sectors</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="energy">Energy</option>
              <option value="consumer">Consumer Goods</option>
              <option value="industrial">Industrial</option>
              <option value="utilities">Utilities</option>
              <option value="materials">Materials</option>
            </select>
            
            <label class="form-label">Investment Style</label>
            <select class="form-select" v-model="stockPickerCriteria.style">
              <option value="growth">Growth</option>
              <option value="value">Value</option>
              <option value="momentum">Momentum</option>
              <option value="dividend">Dividend</option>
              <option value="balanced">Balanced</option>
            </select>
            
            <label class="form-label">Risk Level</label>
            <select class="form-select" v-model="stockPickerCriteria.risk">
              <option value="low">Conservative</option>
              <option value="medium">Moderate</option>
              <option value="high">Aggressive</option>
            </select>
            
            <label class="form-label">Time Horizon</label>
            <select class="form-select" v-model="stockPickerCriteria.timeHorizon">
              <option value="short">Short-term (1-3 months)</option>
              <option value="medium">Medium-term (3-12 months)</option>
              <option value="long">Long-term (1+ years)</option>
            </select>
            
            <button class="btn btn-ai" @click="runStockPicker" :disabled="isStockPickerLoading">
              <i class="bi bi-magic"></i>
              Generate AI Recommendations
            </button>
           
          </div>
          
          <div class="results-section">
            <h4><i class="bi bi-trophy"></i> AI Recommendations</h4>
            <div id="stockPickerResults" v-if="!isStockPickerLoading">
              <div v-if="stockRecommendations.length === 0 && !stockPickerError" class="text-center text-muted" style="padding: 3rem 0;">
                <i class="bi bi-robot" style="font-size: 3rem; opacity: 0.3;"></i>
                <p style="margin-top: 1rem;">Configure your criteria and click "Generate AI Recommendations" to get started</p>
              </div>
              <div v-if="stockPickerError" class="alert alert-danger">
                <i class="bi bi-exclamation-triangle"></i>
                Error generating recommendations: {{ stockPickerError }}
              </div>
              <div v-for="(stock, index) in stockRecommendations" :key="stock.symbol" 
                   class="stock-recommendation result-item" :style="{ animationDelay: `${index * 0.1}s` }">
                <div class="stock-header">
                  <div class="stock-symbol">{{ stock.symbol }}</div>
                  <div class="stock-price-info">
                    <span class="current-price">${{ formatPrice(stock.current_price) }}</span>
                    <span class="price-change" :class="{ positive: stock.change_percent >= 0, negative: stock.change_percent < 0 }">
                      {{ stock.change_percent >= 0 ? '+' : '' }}{{ formatPercent(stock.change_percent) }}
                    </span>
                  </div>
                </div>
                
                <div class="stock-name">{{ stock.name }}</div>
                
                <div class="stock-score">
                  <span class="score-badge">AI Score: {{ stock.score }}/100</span>
                  <span class="badge" :class="`bg-${getScoreColor(stock.score)}`">{{ getScoreLabel(stock.score) }}</span>
                </div>
                
                <div class="stock-metrics">
                  <div class="metric-item">
                    <span class="metric-label">Market Cap:</span>
                    <span class="metric-value">{{ formatMarketCap(stock.market_cap) }}</span>
                  </div>
                  <div v-if="stock.pe_ratio > 0" class="metric-item">
                    <span class="metric-label">P/E Ratio:</span>
                    <span class="metric-value">{{ stock.pe_ratio.toFixed(1) }}</span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">Volume:</span>
                    <span class="metric-value" :class="{ 'high-volume': stock.volume_ratio > 1.5 }">
                      {{ stock.volume_ratio.toFixed(1) }}x
                    </span>
                  </div>
                </div>
                
                <div class="stock-reason">{{ stock.reason }}</div>
                
                <div class="stock-footer">
                  <span class="sector-tag">
                    <i class="bi bi-tag"></i> {{ stock.sector }}
                  </span>
                  <span class="return-estimate" :class="{ positive: parseFloat(stock.expectedReturn) >= 0, negative: parseFloat(stock.expectedReturn) < 0 }">
                    <i class="bi bi-graph-up"></i> {{ stock.expectedReturn }}%
                  </span>
                  <span class="risk-level">
                    <i class="bi bi-shield"></i> {{ stock.riskLevel }}
                  </span>
                </div>
              </div>
            </div>
            <div class="loading-spinner" v-if="isStockPickerLoading">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Analyzing...</span>
              </div>
              <p style="margin-top: 1rem;">AI is analyzing market data...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Stock Diagnosis -->
      <div class="ai-tool-card">
        <div class="tool-header">
          <div class="tool-icon">
            <i class="bi bi-search"></i>
          </div>
          <div class="tool-title">
            <h3>AI Stock Diagnosis</h3>
            <p>Analyze your portfolio performance and get professional investment advice based on your holdings</p>
          </div>
        </div>
        
        <div class="tool-content">
          <div class="input-section">
            <h4><i class="bi bi-input-cursor"></i> Portfolio Stock Analysis</h4>
            
            <label class="form-label">Stock Symbol</label>
            <input type="text" class="form-control" v-model="portfolioData.symbol" 
                   placeholder="Enter stock symbol (e.g., AAPL, TSLA)" style="text-transform: uppercase;"
                   @input="formatStockSymbol" @keypress.enter="runPortfolioDiagnosis">
            
            <label class="form-label">Purchase Price</label>
            <input type="number" class="form-control" v-model="portfolioData.purchasePrice" 
                   placeholder="Enter purchase price (e.g., 150.50)" step="0.01" min="0">
            
            <label class="form-label">Purchase Date</label>
            <input type="date" class="form-control" v-model="portfolioData.purchaseDate">
            
            <label class="form-label">Purchase Market</label>
            <select class="form-select" v-model="portfolioData.purchaseMarket">
              <option value="NASDAQ">NASDAQ</option>
              <option value="NYSE">NYSE (New York Stock Exchange)</option>
              <option value="AMEX">AMEX (American Stock Exchange)</option>
              <option value="OTC">OTC (Over-the-Counter)</option>
            </select>
            
            <label class="form-label">Analysis Type</label>
            <select class="form-select" v-model="portfolioData.analysisType">
              <option value="portfolio">Portfolio Analysis (Recommended)</option>
              <option value="comprehensive">Comprehensive Analysis</option>
              <option value="technical">Technical Analysis</option>
              <option value="fundamental">Fundamental Analysis</option>
              <option value="sentiment">Market Sentiment</option>
              <option value="risk">Risk Assessment</option>
            </select>
            
            <button class="btn btn-ai" @click="runPortfolioDiagnosis" :disabled="isDiagnosisLoading">
              <i class="bi bi-activity"></i>
              Run AI Diagnosis
            </button>
          </div>
          
          <div class="results-section">
            <h4><i class="bi bi-clipboard-data"></i> Diagnosis Report</h4>
            <div id="stockDiagnosisResults" v-if="!isDiagnosisLoading">
              <div v-if="!stockDiagnosis && !diagnosisError" class="text-center text-muted" style="padding: 3rem 0;">
                <i class="bi bi-search" style="font-size: 3rem; opacity: 0.3;"></i>
                <p style="margin-top: 1rem;">Enter a stock symbol and click "Run AI Diagnosis" to analyze</p>
              </div>
              <div v-if="diagnosisError" class="alert alert-danger">
                <i class="bi bi-exclamation-triangle"></i>
                Portfolio diagnosis error: {{ diagnosisError }}
              </div>
              <div v-if="stockDiagnosis">
                <!-- Portfolio performance overview -->
                <div v-if="stockDiagnosis.portfolioPerformance" class="diagnosis-section result-item">
                  <div class="diagnosis-header">
                    <h5 class="diagnosis-title">
                      <i class="bi bi-briefcase"></i> {{ stockDiagnosis.symbol }} - Portfolio Performance
                    </h5>
                    <span class="badge" :class="`bg-${getScoreColor(stockDiagnosis.overallScore)}`">
                      {{ stockDiagnosis.overallScore }}/100
                    </span>
                  </div>
                  <div class="portfolio-metrics">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="metric-card">
                          <div class="metric-label">Purchase Price</div>
                          <div class="metric-value">$
                            {{ formatPrice(stockDiagnosis.portfolioPerformance.purchasePrice) }}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="metric-card">
                          <div class="metric-label">Current Price</div>
                          <div class="metric-value">$
                            {{ formatPrice(stockDiagnosis.portfolioPerformance.currentPrice) }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <div class="metric-card">
                          <div class="metric-label">Total Return</div>
                          <div class="metric-value" :class="{ 'text-success': stockDiagnosis.portfolioPerformance.totalReturn >= 0, 'text-danger': stockDiagnosis.portfolioPerformance.totalReturn < 0 }">
                            <i class="bi" :class="stockDiagnosis.portfolioPerformance.totalReturn >= 0 ? 'bi-arrow-up' : 'bi-arrow-down'"></i>
                            {{ stockDiagnosis.portfolioPerformance.totalReturn >= 0 ? '+' : '' }}
                            {{ formatPercent(stockDiagnosis.portfolioPerformance.totalReturn) }}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="metric-card">
                          <div class="metric-label">Holding Days</div>
                          <div class="metric-value">{{ stockDiagnosis.portfolioPerformance.holdingDays }} days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="diagnosis-content mt-3" v-html="stockDiagnosis.summary"></div>
                </div>
                <!-- Stock analysis without portfolio performance -->
                <div v-else class="diagnosis-section result-item">
                  <div class="diagnosis-header">
                    <h5 class="diagnosis-title">{{ stockDiagnosis.symbol }} - Stock Analysis</h5>
                    <span class="badge" :class="`bg-${getScoreColor(stockDiagnosis.overallScore)}`">
                      {{ stockDiagnosis.overallScore }}/100
                    </span>
                  </div>
                  <div class="diagnosis-content" v-html="stockDiagnosis.summary"></div>
                </div>
                
                <!-- Analysis sections -->
                <div v-if="stockDiagnosis.sections" v-for="(section, index) in stockDiagnosis.sections" 
                     :key="index" class="diagnosis-section result-item" 
                     :style="{ animationDelay: `${(index + 1) * 0.1}s` }">
                  <div class="diagnosis-header">
                    <h6 class="diagnosis-title">{{ section.title }}</h6>
                    <span class="badge" :class="`bg-${getScoreColor(section.score)}`">
                      {{ section.score }}/100
                    </span>
                  </div>
                  <div class="diagnosis-content" v-html="section.content"></div>
                </div>
              </div>
            </div>
            <div class="loading-spinner" v-if="isDiagnosisLoading">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Diagnosing...</span>
              </div>
              <p style="margin-top: 1rem;">AI is performing deep analysis...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import navcomponent from '../component/nav/nav.vue'
import { ref, onMounted } from 'vue';
import { getStockRecommendations, getPortfolioDiagnosis } from '../../api/module/web/ai';
import { useUserStore } from '@/store';

const userStore = useUserStore();
// Mock data for trader info
const traderInfo = ref({
  homeTopTitle: 'AI Trading Platform'
});

// Stock Picker related data
const stockPickerCriteria = ref({
  sector: '',
  style: 'growth',
  risk: 'medium',
  timeHorizon: 'medium'
});
const stockRecommendations = ref<any[]>([]);
const isStockPickerLoading = ref(false);
const stockPickerError = ref('');

// Stock Diagnosis related data
const portfolioData = ref({
  symbol: '',
  purchasePrice: '',
  purchaseDate: '',
  purchaseMarket: 'NASDAQ',
  analysisType: 'portfolio'
});
const stockDiagnosis = ref<any>(null);
const isDiagnosisLoading = ref(false);
const diagnosisError = ref('');

// Helper methods
function formatPrice(price: number) {
  return typeof price === 'number' ? price.toFixed(2) : '0.00';
}

function formatPercent(percent: number) {
  return typeof percent === 'number' ? percent.toFixed(2) : '0.00';
}

function formatMarketCap(cap: number) {
  if (!cap) return '$0';
  if (cap > 1e12) return `$${(cap / 1e12).toFixed(1)}T`;
  if (cap > 1e9) return `$${(cap / 1e9).toFixed(1)}B`;
  if (cap > 1e6) return `$${(cap / 1e6).toFixed(1)}M`;
  return `$${cap.toFixed(0)}`;
}

function getScoreColor(score: number) {
  if (score >= 80) return 'success';
  if (score >= 60) return 'warning';
  return 'danger';
}

function getScoreLabel(score: number) {
  if (score >= 80) return 'Strong Buy';
  if (score >= 60) return 'Buy';
  if (score >= 40) return 'Hold';
  return 'Sell';
}

function formatStockSymbol(event: Event) {
  const input = event.target as HTMLInputElement;
  input.value = input.value.toUpperCase();
  portfolioData.value.symbol = input.value;
}

// API Functions
async function checkLoginStatus() {
  try {
    const response = await fetch('/api/checklogin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error checking login status:', error);
  }
  return { success: false };
}

async function runStockPicker() {
  try{
        let histaryday = new Date();
        histaryday.setDate(histaryday.getDate() - 1);
        console.log(histaryday.toISOString().slice(0, 10))
        localStorage.removeItem(`runStockPicker_${histaryday.toISOString().slice(0, 10)}`)
    }
    catch(error){
      
    }
  const today = new Date().toISOString().slice(0, 10);
  const likeKey = `runStockPicker_${today}`;
  
  // Clear previous results and errors
  stockRecommendations.value = [];
  stockPickerError.value = '';
  isStockPickerLoading.value = true;
  
  try {
    // Check login status
   
    if (!userStore.token) {
      if (localStorage.getItem(likeKey)) {
        stockPickerError.value = 'You have already used it once today. If you want to continue using it, please log in!';
        return;
      }
    }
    
    const data = await getStockRecommendations(stockPickerCriteria.value);
    
    if (!data.success) {
      throw new Error(data.error || 'Server returned error status');
    }
    
    stockRecommendations.value = data.recommendations || [];
    localStorage.setItem('runStock', JSON.stringify(stockRecommendations.value));
    
  } catch (error) {
    console.error('Error in runStockPicker:', error);
    stockPickerError.value = error instanceof Error ? error.message : 'Unknown error';
  } finally {
    isStockPickerLoading.value = false;
    localStorage.setItem(likeKey, '1');
  }
}

async function runPortfolioDiagnosis() {
  const today = new Date().toISOString().slice(0, 10);
  const likeKey = `runPortfolioDiagnosis_${today}`;
  
  // Validate required fields
  if (!portfolioData.value.symbol.trim()) {
    alert('Please enter a stock symbol');
    return;
  }
  
  if (!portfolioData.value.purchasePrice || !portfolioData.value.purchaseDate) {
    alert('Please fill in purchase price and date for more accurate portfolio analysis');
  }
  
  // Clear previous results and errors
  stockDiagnosis.value = null;
  diagnosisError.value = '';
  isDiagnosisLoading.value = true;
  
  try {
    // Check login status
    const loginStatus = await checkLoginStatus();
    if (loginStatus.success && !loginStatus.userlogin) {
      if (localStorage.getItem(likeKey)) {
        diagnosisError.value = 'You have already used it once today. If you want to continue using it, please log in!';
        return;
      }
    }
    
    const requestData = {
      ...portfolioData.value,
      purchasePrice: portfolioData.value.purchasePrice ? parseFloat(portfolioData.value.purchasePrice) : null,
    };
    
    const data = await getPortfolioDiagnosis(requestData);
    
    if (!data.success) {
      throw new Error(data.error || 'Server returned error status');
    }
    
    stockDiagnosis.value = data.diagnosis || null;
    
  } catch (error) {
    console.error('Error in runPortfolioDiagnosis:', error);
    diagnosisError.value = error instanceof Error ? error.message : 'Unknown error';
  } finally {
    isDiagnosisLoading.value = false;
    localStorage.setItem(likeKey, '1');
  }
}

async function testAPI() {
  console.log('Testing AI Stock Picker API...');
  try {
    const response = await fetch('/api/ai/stock-picker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sector: 'technology',
        style: 'growth',
        risk: 'medium',
        timeHorizon: 'medium'
      })
    });
    
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Full API response:', data);
    
    if (data.recommendations && data.recommendations.length > 0) {
      alert(`API test successful! Got ${data.recommendations.length} recommendations`);
    } else {
      alert('API response successful but no recommendations found');
    }
  } catch (error) {
    console.error('API test failed:', error);
    alert(`API test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Load saved results on mount
onMounted(() => {
  try {
    const savedResults = localStorage.getItem('runStock');
    if (savedResults) {
      stockRecommendations.value = JSON.parse(savedResults);
    }
  } catch (error) {
    console.error('Error loading saved results:', error);
  }
});
</script>

<style scoped>
.ai-tools-page {
  background: linear-gradient(145deg, #13141f 0%, #181c2b 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.navbar {
  background: linear-gradient(90deg, #181c2b 0%, #13141f 100%);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  padding: 0.5rem 0;
  border-bottom: 1px solid #ffd700;
}

.navbar-brand {
  font-weight: 600;
  font-size: 1rem;
  color: #ffd700;
}

.ai-header {
  background: linear-gradient(135deg, #ffb300 0%, #ffd700 50%, #b8860b 100%);
  padding: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.ai-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10,5 L15,10 L10,15 L5,10 Z" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>') repeat;
  opacity: 0.1;
}

.ai-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #13141f;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(255,255,255,0.2);
  position: relative;
  z-index: 1;
}

.ai-header p {
  font-size: 1.2rem;
  color: #13141f;
  opacity: 0.9;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
}

.ai-tools-container {
  padding: 2rem 0;
}

.ai-tool-card {
  background: linear-gradient(145deg, #181c2b 0%, #13141f 100%);
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  position: relative;
  overflow: hidden;
  border-top: 3px solid #ffd700;
}

.ai-tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  border-color: var(--gold-color);
}

.ai-tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--ai-gradient);
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tool-icon {
  background: linear-gradient(135deg, #ffd700 0%, #ffb300 100%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  color: #1a1a2e;
  font-size: 1.25rem;
}

.tool-title {
  flex: 1;
}

.tool-title h3 {
  color: #ffffff;
  margin: 0;
  font-size: 1.5rem;
}

.tool-title p {
  color: #a0a0a0;
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
}

.tool-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.input-section {
  background: rgba(255,215,0,0.05);
  border: 1px solid #2a2a3a;
  border-radius: 12px;
  padding: 1.5rem;
}

.input-section h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.form-control, .form-select {
  background-color: #1a1a2e;
  border: 1px solid #2a2a3a;
  color: #ffffff;
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 1rem;
}

.form-control:focus, .form-select:focus {
  background-color: #1a1a2e;
  border-color: #ffd700;
  color: #ffffff;
  box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25);
}

.btn-ai {
  background: linear-gradient(90deg, #ffd700 0%, #b8860b 100%);
  border: none;
  color: #13141f;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-ai:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
  color: #13141f;
}

.btn-ai:disabled {
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}

.results-section {
  background: rgba(46, 204, 113, 0.05);
  border: 1px solid #2ecc71;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 200px;
}

.results-section h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.loading-spinner {
  text-align: center;
  padding: 2rem;
}

.spinner-border {
  color: #ffd700;
}

.stock-recommendation {
  background: rgba(255,215,0,0.1);
  border: 1px solid #ffd700;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.stock-recommendation:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  border-color: #ffb300;
}

.stock-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.stock-symbol {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffd700;
}

.stock-name {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin-bottom: 1rem;
  font-weight: 500;
}

.stock-price-info {
  text-align: right;
}

.current-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  display: block;
}

.price-change {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.25rem;
  display: inline-block;
}

.price-change.positive {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

.price-change.negative {
  background: rgba(231, 76, 60, 0.2);
  color: #e74c3c;
}

.stock-score {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.score-badge {
  background: linear-gradient(90deg, #ffd700 0%, #b8860b 100%);
  color: #13141f;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
}

.stock-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 80px;
}

.metric-label {
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 0.25rem;
}

.metric-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
}

.metric-value.high-volume {
  color: #f1c40f;
}

.stock-reason {
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0,0,0,0.1);
  border-radius: 8px;
  border-left: 3px solid #ffd700;
}

.stock-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.sector-tag, .return-estimate, .risk-level {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(0,0,0,0.3);
}

.sector-tag {
  color: #ffd700;
}

.return-estimate.positive {
  color: #ffd700;
}

.return-estimate.negative {
  color: #e74c3c;
}

.risk-level {
  color: #f1c40f;
}

.diagnosis-section {
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.diagnosis-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.diagnosis-title {
  color: #ffd700;
  font-weight: 600;
  margin: 0;
}

.diagnosis-content {
  color: #a0a0a0;
  line-height: 1.5;
}

.portfolio-metrics {
  margin: 1rem 0;
}

.metric-card {
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin-bottom: 0.5rem;
}

.metric-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
}

.text-success {
  color: #ffd700 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.back-btn {
  background: #13141f;
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  border-color: #ffd700;
  color: #ffd700;
  text-decoration: none;
}

/* AI Animation Effects */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.ai-thinking {
  animation: pulse 1.5s infinite;
}

/* Result Display Animation */
.result-item {
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .ai-header h1 {
    font-size: 2rem;
  }
  
  .tool-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tool-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>