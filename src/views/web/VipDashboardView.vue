<template>
  <div class="app-container">
    <div class="number-flow"></div>
    <!-- 全页面金融背景层 -->
    <div class="global-financial-background">
      <!-- 流动数字 - 覆盖整个页面 -->
      <div class="flowing-numbers-global">
        <span class="number-item-global">$1,234,567</span>
        <span class="number-item-global">+15.8%</span>
        <span class="number-item-global">$98,765</span>
        <span class="number-item-global">+8.2%</span>
        <span class="number-item-global">$2,345,678</span>
        <span class="number-item-global">+12.5%</span>
        <span class="number-item-global">$567,890</span>
        <span class="number-item-global">+22.3%</span>
        <span class="number-item-global">$3,456,789</span>
        <span class="number-item-global">+18.6%</span>
      </div>
      <!-- K线图背景 - 多个位置 -->
      <svg class="kline-chart-global kline-1" viewBox="0 0 400 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="klineGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.2" />
            <stop offset="100%" style="stop-color:#FFD700;stop-opacity:0" />
          </linearGradient>
        </defs>
        <path d="M0,180 L40,160 L80,140 L120,120 L160,100 L200,90 L240,85 L280,80 L320,75 L360,70 L400,65" 
              fill="none" stroke="#FFD700" stroke-width="2" opacity="0.3"/>
        <path d="M0,180 L40,160 L80,140 L120,120 L160,100 L200,90 L240,85 L280,80 L320,75 L360,70 L400,65 L400,200 L0,200 Z" 
              fill="url(#klineGradient1)"/>
      </svg>
      <svg class="kline-chart-global kline-2" viewBox="0 0 400 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="klineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#00FFAE;stop-opacity:0.15" />
            <stop offset="100%" style="stop-color:#00FFAE;stop-opacity:0" />
          </linearGradient>
        </defs>
        <path d="M0,170 L50,150 L100,130 L150,110 L200,95 L250,88 L300,82 L350,78 L400,75" 
              fill="none" stroke="#00FFAE" stroke-width="2" opacity="0.25"/>
        <path d="M0,170 L50,150 L100,130 L150,110 L200,95 L250,88 L300,82 L350,78 L400,75 L400,200 L0,200 Z" 
              fill="url(#klineGradient2)"/>
      </svg>
      <!-- 金钱符号装饰 - 覆盖整个页面 -->
      <div class="money-symbols-global">
        <span class="symbol-global">$</span>
        <span class="symbol-global">₿</span>
        <span class="symbol-global">€</span>
        <span class="symbol-global">£</span>
        <span class="symbol-global">¥</span>
        <span class="symbol-global">$</span>
        <span class="symbol-global">₿</span>
        <span class="symbol-global">€</span>
      </div>
      <!-- 网格线 - 覆盖整个页面 -->
      <div class="grid-overlay-global"></div>
      <!-- 涨跌箭头装饰 -->
      <div class="trend-indicators">
        <span class="trend-arrow up">↑</span>
        <span class="trend-arrow up">↑</span>
        <span class="trend-arrow down">↓</span>
        <span class="trend-arrow up">↑</span>
        <span class="trend-arrow up">↑</span>
        <span class="trend-arrow down">↓</span>
        <span class="trend-arrow up">↑</span>
      </div>
    </div>
    <navcomponent />
    <div class="main-content">
     <!-- VIP Hero Section - 精致欢迎区域 -->
     <div class="vip-hero-section-compact" :class="getMembershipClass(user_info?.membership_level || '')">

        <div class="vip-hero-content-compact">
            <!-- 左侧：头像和会员徽章 -->
            <div class="hero-left-section">
                <div class="avatar-container-compact">
                    <div class="avatar-glow-ring"></div>
                    <div class="avatar-wrapper-compact" @click="handleAvatarClick">
                <img 
                  :src="user_info?.avatar_url || 'https://lnndxivliqxifhpdpidr.supabase.co/storage/v1/object/public/avatars/avatars/avatars/123456_0868673e94664ac2959bbe029a76675d.webp'" 
                  alt="avatar" 
                          class="avatar-compact"
                >
                    </div>
                <input
                  ref="avatarFileInput"
                  type="file"
                  accept="image/*"
                  style="display: none;"
                  @change="handleAvatarFileChange"
                >
            </div>
                <div class="membership-badge-compact" :class="getMembershipBadgeClass(user_info?.membership_level || '')">
                    <span class="badge-label">{{ user_info?.membership_level || 'Member' }}</span>
            </div>
            </div>

            <!-- 中间：欢迎文字和激励语 -->
            <div class="hero-center-section">
                <div class="welcome-header">
                    <span class="welcome-label-compact">Welcome Back</span>
                    <span class="user-name-compact">{{ user_info?.username || 'Member' }}</span>
                </div>
                <p class="hero-subtitle-compact">
                    {{ getWelcomeMessage(user_info?.membership_level || '') }}
                </p>
                <!-- 精简的激励标语 -->
                <div class="inspiration-compact">
                    <span class="inspiration-text">Patience • Discipline • Prosperity</span>
                    <span class="inspiration-divider">|</span>
                    <span class="inspiration-text highlight">Together We Succeed</span>
        </div>
    </div>

            <!-- 右侧：操作按钮 -->
            <div class="hero-right-section">
                <button class="action-btn-compact primary" @click="handleUploadTradeRecord">
                    <svg viewBox="64 64 896 896" width="18" height="18" fill="currentColor">
                        <path d="M872 474H728V184c0-4.4-3.6-8-8-8H304c-4.4 0-8 3.6-8 8v290H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                    <span>Upload Trade</span>
                </button>
                <button class="action-btn-compact secondary" @click="handleSettingsClick">
                    <svg viewBox="64 64 896 896" width="18" height="18" fill="currentColor">
                        <path d="M925.8 731.1l-74.2-43.1c3.7-23.2 5.6-46.9 5.6-70.9s-1.9-47.7-5.6-70.9l74.2-43.1c7.7-4.5 11-14.1 7.7-22.3l-48.1-111.2c-3.3-8.2-12.2-12.1-20.4-9.1l-74.2 29.7c-19.6-15.1-40.5-28.1-62.6-38.7l-11.3-78.7c-1.2-8.6-8.6-14.8-17.2-14.8h-120c-8.6 0-16 6.2-17.2 14.8l-11.3 78.7c-22.1 10.6-43 23.6-62.6 38.7l-74.2-29.7c-8.2-3.3-17.1.9-20.4 9.1l-48.1 111.2c-3.3 8.2 0 17.8 7.7 22.3l74.2 43.1c-3.7 23.2-5.6 46.9-5.6 70.9s1.9 47.7 5.6 70.9l-74.2 43.1c-7.7 4.5-11 14.1-7.7 22.3l48.1 111.2c3.3 8.2 12.2 12.1 20.4 9.1l74.2-29.7c19.6 15.1 40.5 28.1 62.6 38.7l11.3 78.7c1.2 8.6 8.6 14.8 17.2 14.8h120c8.6 0 16-6.2 17.2-14.8l11.3-78.7c22.1-10.6 43-23.6 62.6-38.7l74.2 29.7c8.2 3.3 17.1-.9 20.4-9.1l48.1 111.2c3.3 8.2 0 17.8-7.7 22.3zM512 704c-106 0-192-86-192-192s86-192 192-192 192 86 192 192-86 192-192 192z"></path>
                    </svg>
                    <span>Settings</span>
                </button>
      </div>
      </div>
      </div>

    <!-- Premium Data Cards Grid - 升级版 -->
    <div class="premium-cards-grid" style="max-width: 1400px;">
      <div class="premium-stat-card" data-card="capital">
        <div class="card-icon-wrapper">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.81 0-1.81-1.49-2.85-3.65-3.28z"/>
          </svg>
      </div>
        <div class="card-content">
          <div class="card-label">Initial Capital</div>
          <div class="card-value premium-value" style="color:#00E6A0;">
            <span class="value-number">{{ formatCurrency(user_info?.initial_asset || 0) }}</span>
            <span class="value-unit">$</span>
          </div>
        </div>
        <div class="card-glow" style="background: radial-gradient(circle, rgba(0,255,174,0.15) 0%, transparent 70%);"></div>
      </div>

      <div class="premium-stat-card" data-card="profit">
        <div class="card-icon-wrapper">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M7.5 11L12 2l4.5 9h-9zm0 11h9v-9h-9v9z"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-label">Total Profit</div>
          <div class="card-value premium-value" style="color:#FFC107;">
            <span class="value-number">{{ formatCurrency(user_info?.utotle_profit || 0) }}</span>
            <span class="value-unit">$</span>
          </div>
        </div>
        <div class="card-glow" style="background: radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%);"></div>
      </div>

      <div class="premium-stat-card" data-card="monthly">
        <div class="card-icon-wrapper">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-label">Monthly Profit</div>
          <div class="card-value premium-value" style="color:#4CAF50;">
            <span class="value-number">{{ formatCurrency(user_info?.umonth_profit || 0) }}</span>
            <span class="value-unit">$</span>
          </div>
        </div>
        <div class="card-glow" style="background: radial-gradient(circle, rgba(82,196,26,0.15) 0%, transparent 70%);"></div>
      </div>

      <div class="premium-stat-card" data-card="last-month">
        <div class="card-icon-wrapper">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-label">Last Month Profit</div>
          <div class="card-value premium-value" style="color:#4CAF50;">
            <span class="value-number">{{ formatCurrency(user_info?.uprvmonth_profit || 0) }}</span>
            <span class="value-unit">$</span>
          </div>
        </div>
        <div class="card-glow" style="background: radial-gradient(circle, rgba(82,196,26,0.15) 0%, transparent 70%);"></div>
      </div>

      <div class="premium-stat-card" data-card="holding">
        <div class="card-icon-wrapper">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-label">Holding Profit</div>
          <div class="card-value premium-value" style="color:#FF9800;">
            <span class="value-number">{{ formatCurrency(user_info?.hold_profit || 0) }}</span>
            <span class="value-unit">$</span>
          </div>
        </div>
        <div class="card-glow" style="background: radial-gradient(circle, rgba(250,173,20,0.15) 0%, transparent 70%);"></div>
      </div>

      <div class="premium-stat-card" data-card="points">
        <div class="card-icon-wrapper">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-label">Available Points</div>
          <div class="card-value premium-value" style="color:#FFC107;">
            <span class="value-number">{{ formatCurrency(user_info?.membership_points || 0) }}</span>
            <span class="value-unit">pts</span>
          </div>
        </div>
        <div class="card-glow" style="background: radial-gradient(circle, rgba(250,173,20,0.15) 0%, transparent 70%);"></div>
      </div>
    </div>

    <!-- Investment Announcements & Strategies (Enhanced Version) -->
    <div class="section" style="max-width: 1400px;">
      <div class="section-header-with-confidentiality">
      <h2 class="card-title">Investment Announcements & Strategies</h2>
        <!-- VIP策略保密提示 -->
        <div class="confidentiality-badge">
          <svg class="confidentiality-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span class="confidentiality-text">VIP Exclusive: Strategies are strictly confidential</span>
        </div>
      </div>
      <div v-if="!Vipdata.announcements_List || Vipdata.announcements_List.length === 0" class="no-announcements">
        <div style="text-align: center; padding: 40px; color: #b0c4e6; font-size: 1.1rem;">
          <i class="bi bi-inbox" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>
          No Announcements
        </div>
      </div>
      <div v-else>
        <div class="announcement-card" v-for="value in Vipdata.announcements_List">
          <div class="announcement-header">
            <span class="announcement-title">{{ value.title }}</span>
            <span class="priority-badge priority-high">Priority: {{ value.priority }}</span>
          </div>
          <div class="announcement-content" v-html="formatAnnouncementContent(value.content)"></div>
          <div class="announcement-meta">
            <span>Publisher: {{ value.publisher }}</span>
            <span><span class="us-time" data-time="{{ value.publish_time }}">{{ formatUSDate(value.publish_time) }}</span></span>
          </div>
        </div>
      </div>
      <!-- VIP Trading Records Table Area -->
    <div class="vip-trades-section" style="max-width: 1400px;">
      <!-- PC Table -->
      <!-- <div class="table-wrapper trade-table-pc">
        <table class="vip-table">
          <thead>
            <tr>
              <th>Market</th>
              <th>Direction</th>
              <th>Symbol</th>
              <th>Entry Price</th>
              <th>Current Price</th>
              <th>Exit Price</th>
              <th>Quantity</th>
              <th>PnL</th>
              <th>ROI</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trade in Vipdata.tradelist" :key="trade.id">
              <td class="symbol-cell">{{ trade.trade_market }}</td>
              <td class="symbol-cell"><span class="trade-type-table">{{ trade.direction==1?'Long':'Short' }}</span></td>
              <td class="symbol-cell">{{ trade.symbol }}</td>
              <td>${{ formatCurrency(trade.entry_price) }}</td>
              <td class="current-price" :data-symbol="trade.symbol">
                ${{ trade.current_price ? formatCurrency(trade.current_price) : '-' }}
              </td>
              <td>${{ trade.exit_price ? formatCurrency(trade.exit_price) : '-' }}</td>
              <td>{{ trade.size }}</td>
              <td class="pnl-cell">
                <span class="trade-profit-table" >{{ formatCurrency(trade.profitAmount) }}</span>
              </td>
              <td class="roi-cell">
                <span class="trade-profit-table" >
                  {{ parseFloat(trade.profitRatio) > 0 ? '+' : '' }}{{ trade.profitRatio }}%
                </span>
              </td>
              <td class="date-cell">
                {{ formatUSDate(trade.entry_date) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
     
      <!-- Mobile Table -->
      <div class="trade-card-list trade-mobile-list">
        <div v-for="t in Vipdata.tradelist" :key="t.id" class="trade-card">
          <div class="trade-card-header">
            <span class="trade-symbol">{{ t.trade_market || '-' }}</span>
            <span class="trade-symbol">{{ t.symbol || '-' }}</span>
            <span :class="['trade-type', t.direction==1 ? 'sell' : 'buy']">{{ t.direction==1 ? 'Long' : 'Short' }}</span>
            <span class="trade-date">{{ formatUSDate(t.entry_date) }}</span>
          </div>
          <div class="trade-card-body">
            <div class="trade-info-group">
              <div><span class="label">Entry:</span> $<b>{{ formatCurrency(t.entry_price) }}</b></div>
           
              <div v-if="t.exit_price"><span class="label">Exit:</span> $<b>{{ formatCurrency(t.exit_price) }}</b></div>
              <div v-else><span class="label" >Current:</span> $<b>{{ t.current_price ? formatCurrency(t.current_price) : 'Loading...' }}</b></div>
               <div><span class="label">Qty:</span> <b>{{ t.quantity || t.size }}</b></div>
            </div>
          
            <div class="trade-info-group">
              <div>
                <span class="label">P&L:</span>
                <span class="trade-profit-table" v-if="t.exit_price" :class="getProfitColor(((t.exit_price-t.entry_price)*(t.quantity||t.size)*t.direction))">
                  {{ t.currency }}{{ formatCurrency(((t.exit_price-t.entry_price)*(t.quantity||t.size)*t.direction)) }}
                </span>
                 <span class="trade-profit-table" v-else :class="getProfitColor(t.current_price ? ((t.current_price-t.entry_price)*(t.quantity||t.size)*t.direction) : 0)">
                  {{ t.currency }}{{ t.current_price ? formatCurrency(((t.current_price-t.entry_price)*(t.quantity||t.size)*t.direction)) : 'Loading...' }}
                </span>
              </div>
              <div>
                <span class="label">Ratio:</span>
                <span class="trade-profit-table" v-if="t.exit_price" :class="getProfitColor(((t.exit_price-t.entry_price)/t.entry_price*t.direction*100))">
                  {{((t.exit_price-t.entry_price)/t.entry_price*t.direction*100).toFixed(2) }}%
                </span>
                 <span class="trade-profit-table" v-else :class="getProfitColor(t.current_price ? ((t.current_price-t.entry_price)/t.entry_price*t.direction*100) : 0)">
                  {{ t.current_price ? ((t.current_price-t.entry_price)/t.entry_price*t.direction*100).toFixed(2) + '%' : 'Loading...' }}
                </span>
               

              </div>
               <div v-if="exit_date"><span class="label">Exit Date:</span> <b>{{ t.exit_time ? formatUSDate(t.exit_time) : '-' }}</b></div>
               <div v-else><span class="label">Entry Date:</span> <b>{{ t.entry_time ? formatUSDate(t.entry_time) : '-' }}</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- Trading Records (Position Analysis/Historical Trading) -->
     <div class="section">
        <h2 class="card-title">My Trade Records</h2>
        <!-- Statistics Cards Area (Total Assets, Total Market Value, Available Funds) -->
        <div class="flex-row mb-24">
            <div class="card" style="flex:1;min-width:220px;">
                <div class="glass-stat-label">Total Assets</div>
                <div class="glass-stat-value gold-number">$ {{ formatCurrency((user_info?.initial_asset || 0)+(user_info?.utotle_profit || 0)+(user_info?.now_amount || 0)-(user_info?.hold_amount || 0)) }}</div>
                <div class="progress-bar" style="width:85%"></div>
               
            </div>
            <div class="card" style="flex:1;min-width:220px;">
                <div class="glass-stat-label">Total Market Value</div>
                <div class="glass-stat-value" style="color:#00ffae;">${{ formatCurrency(user_info?.now_amount || 0) }}</div>
                <div class="progress-bar" style="width:65%;background:#00ffae;"></div>
            </div>
            <div class="card" style="flex:1;min-width:220px;">
                <div class="glass-stat-label">Available Funds</div>
                <div class="glass-stat-value" style="color:#faad14;">${{ formatCurrency((user_info?.initial_asset || 0)+(user_info?.utotle_profit || 0)-(user_info?.hold_amount || 0)) }}</div>
                <div class="progress-bar" style="width:50%;background:#faad14;"></div>
            </div>
        </div>
        <div id="trade-record-detail">
         
          <!-- Mobile Cards (5 items) -->
          <div class="trade-card-list trade-mobile-list">
            
            <div class="trade-card" v-for="t in Vipdata.user_trade_list" :key="t.id">
              <div class="trade-card-header">
                <span class="trade-symbol">{{ t.trade_market || '-' }}</span>
                 <span class="trade-symbol">{{ t.symbol || '-' }}</span>
                  <span class="trade-type sell">{{t.direction==1?"Long":"Short"}}</span>
                
                <span class="trade-date">{{ formatUSDate(t.entry_date) }}</span>
              </div>
              <div class="trade-card-body">
                <div class="trade-info-group">
                  <div><span class="label">Entry:</span> <b>{{ t.currency }}{{ formatCurrency(t.entry_price) }}</b></div>
                  
                  <div v-if="t.exit_date"><span class="label">Exit Date:</span> <b>{{ formatUSDate(t.exit_date) }}</b></div>
                  <div v-else><span class="label">Entry Date:</span> <b>{{ formatUSDate(t.entry_date) }}</b></div>
                   <div><span class="label">Qty:</span> <b>{{ t.size || t.quantity }}</b></div>
                </div>
                <div class="trade-info-group">
                   <div>
                    <span class="label">P&L:</span>
                    <span class="trade-profit-table" v-if="t.exit_price" :class="getProfitColor(((t.exit_price-t.entry_price)*(t.size||t.quantity)*t.direction))">
                      {{ t.currency }}{{ formatCurrency(((t.exit_price-t.entry_price)*(t.size||t.quantity)*t.direction)) }}
                    </span>
                    <span class="trade-profit-table" v-else :class="getProfitColor(t.current_price ? ((t.current_price-t.entry_price)*(t.size||t.quantity)*t.direction) : 0)">
                      {{ t.currency }}{{ t.current_price ? formatCurrency(((t.current_price-t.entry_price)*(t.size||t.quantity)*t.direction)) : 'Loading...' }}
                    </span>
                  </div>
                  <div>
                    <span class="label">Ratio:</span>
                    <span class="trade-profit-table" v-if="t.exit_price" :class="getProfitColor(((t.exit_price-t.entry_price)/t.entry_price*t.direction*100))">
                      {{((t.exit_price-t.entry_price)/t.entry_price*t.direction*100).toFixed(2) }}%
                    </span>
                    <span class="trade-profit-table" v-else :class="getProfitColor(t.current_price ? ((t.current_price-t.entry_price)/t.entry_price*t.direction*100) : 0)">
                      {{ t.current_price ? ((t.current_price-t.entry_price)/t.entry_price*t.direction*100).toFixed(2) + '%' : 'Loading...' }}
                    </span>
                  </div>
                   <div v-if="t.exit_price"><span class="label">Exit:</span> <b>{{ t.currency }}{{ formatCurrency(t.exit_price) }}</b></div>
                   <div v-else><span class="label">Current:</span> <b>{{ t.currency }}{{ t.current_price ? formatCurrency(t.current_price) : 'Loading...' }}</b></div>
                </div>
                <!-- Close Trade Button - Only show when exit price is empty, positioned on the right -->
                <div v-if="!t.exit_price" class="trade-close-btn-container" style="display:flex;justify-content:flex-end;margin-top:2px;">
                  <a class="styled-button close-trade-btn" @click="openCloseTradeModal(t)" style="background:linear-gradient(90deg, #FFD700 0%, #FFB300 100%);color:#181F2A;padding:8px 16px;border-radius:8px;border:none;cursor:pointer;font-weight:600;font-size: 12px;">Close Trade</a>
                </div>
              
            </div>
            
            
            
          </div>
        
        <!-- Close Trade Modal -->
        <div id="close-trade-modal" v-show="isCloseTradeModalOpen" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);z-index:2000;align-items:center;justify-content:center;display:flex;">
          <div style="background:#232B3E;border-radius:18px;max-width:600px;width:90vw;max-height:92vh;overflow:auto;padding:32px 24px 24px 24px;position:relative;">
            <button @click="closeCloseTradeModal" style="position:absolute;right:18px;top:18px;background:none;border:none;color:#fff;font-size:28px;cursor:pointer;">×</button>
            <h3 style="color:#FFD700;text-align:center;margin-bottom:24px;">Close Trade</h3>
            
            <div v-if="selectedTrade" class="close-trade-form">
              <div class="form-item">
                <label for="exit_date" style="color:#fff;">Exit Data</label>
                <input type="date" id="exit_date" v-model="closeTradeForm.exitDate" required style="width:100%;padding:12px 16px;border:1px solid #FFD70033;border-radius:8px;background:#181F2A;color:#fff;font-size:1rem;">
              </div>
              
              <div class="form-item">
                <label for="exit_price" style="color:#fff;">Exite Price</label>
                <input type="number" id="exit_price" v-model="closeTradeForm.exitPrice" placeholder="please enter Exite Price" step="0.01" required style="width:100%;padding:12px 16px;border:1px solid #FFD70033;border-radius:8px;background:#181F2A;color:#fff;font-size:1rem;">
              </div>
              
              <div class="form-item">
                <label for="trade_image" style="color:#fff;">Trade Image</label>
                <div class="custom-file">
                  <input type="file" id="trade_image" ref="tradeImageInput" @change="handleImageChange" accept="image/*" style="display:none;">
                  <button type="button" @click="$refs.tradeImageInput.click()" class="btn btn-outline-primary w-100" style="padding:12px 16px;border:1px solid #FFD70033;border-radius:8px;background:#181F2A;color:#fff;" :disabled="isUploading">{{ isUploading ? 'upload...' : 'Click to select file' }}</button>
                </div>
                <div v-if="fileUrl" class="image-preview-container" style="margin-top:12px;">
                  <img :src="fileUrl" alt="Trade Image" style="max-width:100%;max-height:200px;border-radius:8px;">
                </div>
              </div>
              
              <div class="form-actions" style="margin-top:24px;display:flex;gap:12px;">
                <button type="button" @click="closeCloseTradeModal" class="styled-button" style="flex:1;background:#444;" :disabled="isUploading">{{ isUploading ? 'uploading...' : 'Cancel' }}</button>
                <button type="button" @click="confirmCloseTrade" class="styled-button" style="flex:1;background:linear-gradient(90deg, #FFD700 0%, #FFB300 100%);color:#181F2A;" :disabled="isUploading">{{ isUploading ? 'uploading...' : 'Save' }}</button>
              </div>
            </div>
          </div>
        </div>
            
           
            
            
          </div>
        </div>
    </div>
    

    <!-- Member Profit Ranking -->
    <div class="section" style="max-width: 1400px;">
      <h2 class="card-title" style="font-size:2.2rem;font-weight:900;color:#FFD700;text-shadow:0 2px 8px rgba(24,31,42,0.53);margin-bottom:24px;">Member Profit Ranking</h2>
      <div class="card member-rank-table-pc" style="border:3px solid #FFD700;padding:36px 28px 28px 28px;box-shadow:0 0 24px rgba(255,215,0,0.2);">
        <table class="ant-table w-100" style="border-radius:18px;overflow:hidden;background:#181F2A;">
          <thead>
           <tr style="background:#232e4a;">
                        <th style="text-align:center;color:#FFD700;font-size:1.18rem;font-weight:900;letter-spacing:1px;">Rank</th>
                        <th style="text-align:left;color:#FFD700;font-size:1.18rem;font-weight:900;letter-spacing:1px;">Avatar</th>
                        <th style="text-align:left;color:#FFD700;font-size:1.18rem;font-weight:900;letter-spacing:1px;">Member</th>
                        <th style="text-align:left;color:#FFD700;font-size:1.18rem;font-weight:900;letter-spacing:1px;">Membership Level</th>
                        <th style="text-align:right;color:#FFD700;font-size:1.18rem;font-weight:900;letter-spacing:1px;">Total Profit ($)</th>
                        <th style="text-align:right;color:#FFD700;font-size:1.18rem;font-weight:900;letter-spacing:1px;">Monthly Profit ($)</th>
                    </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in displayedUsers" :key="index" class="rank-row" style="border-bottom:1.5px solid rgba(255,215,0,0.13);background:linear-gradient(90deg,#232B3E 80%,#232e4a 100%);">
              <td style="text-align:center;font-weight:900;">
                <span style="font-size:1.6rem;" :style="{color: user.rank === 1 ? '#FFD700' : user.rank === 2 ? '#b0c4e6' : user.rank === 3 ? '#faad14' : '#fff', textShadow: user.rank <= 3 ? '0 0 8px rgba(255,215,0,0.6)' : 'none'}">
                  {{ index+1 }}
                </span>
              </td>
              <td style="text-align:left;">
                 <img :src="user.avatar_url" 
                                 style="width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid #FFD700;box-shadow:0 0 8px #FFD70033;"
                                 ></td>
              <td style="text-align:left;font-weight:700;font-size:1.12rem;letter-spacing:1px;color:#fff;">{{ user.username }}</td>
              <td style="text-align:left;">
                <span class="membership-badge diamond-member" style="font-size:1.08rem;font-weight:900;padding:6px 18px;border-radius:20px;box-shadow:0 0 12px #FFD70055;letter-spacing:1px;background:linear-gradient(90deg,#b0c4e6 60%,#FFD700 100%);color:#232B3E;">
                                {{ user.membership_level  }}
                            </span>
               
              </td>
              <td style="text-align:right;font-weight:900;">
                <span style="font-size:1.12rem;" :style="{color: parseFloat(user.monthly_profit) > 0 ? '#00ffae' : parseFloat(user.totalProfit) < 0 ? '#ff4d4f' : '#b0c4e6'}">
                  {{ formatCurrency(user.utotle_profit) }}
                </span>
              </td>
              <td style="text-align:right;font-weight:900;">
                <span style="font-size:1.12rem;" :style="{color: parseFloat(user.profitRate) > 0 ? '#52c41a' : parseFloat(user.profitRate) < 0 ? '#ff4d4f' : '#b0c4e6'}">
                  {{ formatCurrency(user.umonth_profit) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 查看所有按钮 -->
      <div style="text-align:center;margin-top:24px;">
        <button v-if="Vipdata.usersSort && Vipdata.usersSort.length > 5" 
                class="styled-button" 
                @click="openRankingsModal">
          View All Rankings ({{ Vipdata.usersSort.length }} members)
        </button>
      </div>

      <!-- Mobile Member Ranking -->
      <div class="member-rank-mobile-list">
        <div v-for="(user, index) in displayedUsers" :key="user.id" class="member-rank-mobile-card" style="background:linear-gradient(135deg,#232B3E 60%,#232e4a 100%);border-radius:14px;box-shadow:0 4px 16px rgba(24,31,42,0.2),0 0 0 2px rgba(255,215,0,0.13);border:1.5px solid rgba(255,215,0,0.10);padding:14px 12px 10px 12px;margin-bottom:14px;display:flex;flex-direction:column;gap:8px;">
          <div class="rank-row-main" style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            <span class="rank-num" style="font-size:1.18rem;font-weight:900;min-width:24px;text-align:center;" :style="{color: index === 0 ? '#FFD700' : index === 1 ? '#b0c4e6' : index === 2 ? '#faad14' : '#fff'}">{{ index + 1 }}</span>
            <img :src="user.avatar_url" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid #FFD700;box-shadow:0 0 4px rgba(255,215,0,0.2);display:flex;align-items:center;justify-content:center;"></img>
            <span class="rank-name" style="font-weight:700;font-size:1.05rem;letter-spacing:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">{{ user.username }}</span>
            <span class="rank-level" :class="user.membership_level" style="font-size:0.95rem;padding:2px 10px;border-radius:8px;background:#1a2236;margin-left:4px;min-width:80px;text-align:center;display:inline-block;">{{ user.membership_level }}</span>
          </div>
          <div class="rank-row-bottom" style="display:flex;justify-content:space-between;font-size:1.05em;margin-top:2px;">
            <span class="rank-amount" style="font-weight:900;font-size:1.08rem;" :style="{color: parseFloat(user.utotle_profit) > 0 ? '#00ffae' : parseFloat(user.utotle_profit) < 0 ? '#ff4d4f' : '#b0c4e6'}">{{ formatCurrency(user.utotle_profit) }}</span>
            <span class="rank-rate" style="font-weight:900;font-size:1.08rem;" :style="{color: parseFloat(user.umonth_profit) > 0 ? '#52c41a' : parseFloat(user.umonth_profit) < 0 ? '#ff4d4f' : '#b0c4e6'}">{{ formatCurrency(user.umonth_profit) }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Video Courses -->
    <div class="section">
        <h2 class="card-title">Video Tutorials</h2>
        <div id="videos-container" class="flex-row" style="display:flex;flex-wrap:wrap;gap:24px;">
            <div class="card" style="flex:0 0 calc(33.333% - 16px);min-width:320px;" v-for="value in displayedVideos" :key="value.id">
                <div style="height:280px;background:#232e4a;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:24px;">
                    <video :src="value.video_url" controls="" style="width:100%;height:280px;border-radius:12px;background:#232e4a;"></video>
                </div>
                <h4 style="color:#fff;margin-bottom:16px;">{{ value.title }}</h4>
                <div style="color:#b0c4e6;margin-bottom:12px;height:140px;overflow-y: auto;">{{ value.description }}</div>
                <div style="color:#b0c4e6;margin-bottom:12px;">Last Updated: {{ formatUSDate(value.last_update) }}</div>
            </div>
        </div>
        <div style="text-align:center;margin-top:18px;" v-if="displayedVideos && displayedVideos.length > 2">
            <button id="show-all-videos-btn" 
                    class="styled-button" 
                    @click="goToVideosPage">
              View More Videos
            </button>
        </div>
    </div>

    <!-- Video Modal -->
    <div id="videos-modal" v-show="isVideosModalOpen" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);z-index:2000;align-items:center;justify-content:center;display:flex;">
        <div style="background:#232B3E;border-radius:18px;max-width:1100px;width:98vw;max-height:92vh;overflow:auto;padding:32px 18px 24px 18px;position:relative;">
            <button @click="closeVideosModal" style="position:absolute;right:18px;top:18px;background:none;border:none;color:#fff;font-size:28px;cursor:pointer;">×</button>
                                <h3 style="color:#FFD700;text-align:center;margin-bottom:24px;">All videos</h3>
            <div class="flex-row" id="videos-modal-list">
                <div class="card" style="flex:1;min-width:320px;max-width:520px;margin:12px;" v-for="(video, index) in Vipdata.vedioslist" :key="index">
                    <div style="height:280px;background:#232e4a;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:24px;">
                        <video :src="video.video_url" controls style="width:100%;height:280px;border-radius:12px;background:#232e4a;"></video>
                    </div>
                    <h4 style="color:#fff;margin-bottom:16px;">{{ video.title }}</h4>
                    <div style="color:#b0c4e6;margin-bottom:12px;height:140px;overflow-y: scroll;">{{ video.description }}</div>
                    <div style="color:#b0c4e6;margin-bottom:12px;">Last Updated: {{ formatUSDate(video.last_update) }}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Documents Modal -->
    <div id="documents-modal" v-show="isDocumentsModalOpen" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);z-index:2000;align-items:center;justify-content:center;display:flex;">
        <div style="background:#232B3E;border-radius:18px;max-width:1100px;width:98vw;max-height:92vh;overflow:auto;padding:32px 18px 24px 18px;position:relative;">
            <button @click="closeDocumentsModal" style="position:absolute;right:18px;top:18px;background:none;border:none;color:#fff;font-size:28px;cursor:pointer;">×</button>
            <h3 style="color:#FFD700;text-align:center;margin-bottom:24px;">All Documents</h3>
            <div class="flex-col" id="documents-modal-list" style="gap:24px;">
                <div class="card mb-24" v-for="(document, index) in Vipdata.documentslist" :key="index">
                    <div style="display:flex;align-items:center;gap:24px;">
                        <span class="avatar-glow" style="width:64px;height:64px;display:inline-flex;align-items:center;justify-content:center;font-size:2.5rem;background:#232b3e;margin-right:8px;">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="file-text" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M534 352V136H196c-17.7 0-32 14.3-32 32v688c0 17.7 14.3 32 32 32h632c17.7 0 32-14.3 32-32V352H534zm-64 0H264V200h206v152zm-80 120h160c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H390c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm0 120h160c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H390c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8z"></path>
                            </svg>
                        </span>
                        <div style="flex:1;">
                            <h4 style="color:#fff;margin-bottom:12px;">{{ document.title }}</h4>
                            <div style="color:#b0c4e6;margin-bottom:16px;">{{ document.description }}</div>
                            <div style="display:flex;align-items:center;gap:16px;color:#b0c4e6;font-size:0.9rem;">
                                <span>Last Updated: {{ formatUSDate(document.last_update) }}</span>
                            </div>
                            <div style="margin-top:16px;display:flex;gap:16px;">
                                <a :href="document.file_url" download="" target="_blank" style="color:#FFD700;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"></path>
                                        <path d="M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                                    </svg>
                                    Download
                                </a>
                                <a :href="document.file_url" target="_blank" class="styled-button" style="padding:4px 18px;font-size:1rem;">Preview</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <!-- Documents -->
    <div class="section">
                        <h2 class="card-title">Documents</h2>
        <div id="documents-container">
        <div class="card mb-24" v-for="value in displayedDocuments">
            <div style="display:flex;align-items:center;gap:24px;" >
                <span class="avatar-glow" style="width:64px;height:64px;display:inline-flex;align-items:center;justify-content:center;font-size:2.5rem;background:#232b3e;margin-right:8px;">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="file-text" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M534 352V136H196c-17.7 0-32 14.3-32 32v688c0 17.7 14.3 32 32 32h632c17.7 0 32-14.3 32-32V352H534zm-64 0H264V200h206v152zm-80 120h160c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H390c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm0 120h160c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H390c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8z"></path>
                    </svg>
                </span>
                <div style="flex:1;">
                    <h4 style="color:#fff;margin-bottom:12px;">{{ value.title }}</h4>
                    <div style="color:#b0c4e6;margin-bottom:16px;">{{ value.description }}</div>
                    <div style="display:flex;align-items:center;gap:16px;color:#b0c4e6;font-size:0.9rem;">
                        <span>Last Updated: {{ formatUSDate(value.last_update) }}</span>
                    </div>
                    <div style="margin-top:16px;display:flex;gap:16px;">
                        <a :href="value.file_url" download="" target="_blank" style="color:#FFD700;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"></path>
                                <path d="M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                            </svg>
                            Download
                        </a>
                        <a :href="value.file_url" target="_blank" class="styled-button" style="padding:4px 18px;font-size:1rem;">Preview</a>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
        <div style="text-align:center;margin-top:24px;">
            <button v-if="!showAllDocuments && displayedDocuments && displayedDocuments.length >2" 
                    id="show-all-documents-btn" 
                    class="styled-button" 
                    @click="goToDocumentsPage">
              View More Documents
            </button>
            <button v-else-if="showAllDocuments" 
                    class="styled-button" 
                    @click="toggleDocumentsView">
              Show Top 5 Only
            </button>
        </div>
    </div>

    <!-- Member Benefits Cards Area -->
    <div class="section" style="max-width: 1400px;">
       <h2 class="card-title">Membership Agreement & Benefits</h2>
        <div class="vip-benefit-subtitle" style="text-align:center;color:#b0c4e6;font-size:1.2rem;margin-bottom:48px;">Exclusive member benefits to help your wealth grow</div>
      <div class="vip-benefit-grid">
        <div class="vip-benefit-card">
                <div class="benefit-icon-wrapper">
                    <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" fill="url(#g1pro)"/>
                        <path d="M10 34L20 20L28 28L38 12" stroke="#FFD700" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="10" cy="34" r="2" fill="#FFD700"/>
                        <circle cx="20" cy="20" r="2" fill="#FFD700"/>
                        <circle cx="28" cy="28" r="2" fill="#FFD700"/>
                        <circle cx="38" cy="12" r="2" fill="#FFD700"/>
                        <defs>
                            <radialGradient id="g1pro" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" gradientTransform="matrix(48 0 0 48 0 0)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD700" stop-opacity="0.18"/>
                                <stop offset="1" stop-color="#232B3E" stop-opacity="0.9"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="benefit-title">Professional Investment Strategies</h3>
                <ul class="benefit-list">
                    <li>Daily strategies from a senior team</li>
                    <li>Personalized portfolio advice</li>
                    <li>Real-time risk alerts</li>
                </ul>
            </div>
            <div class="vip-benefit-card">
                <div class="benefit-icon-wrapper">
                    <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" fill="url(#g2pro)"/>
                        <path d="M24 8L36 14V24C36 36 24 40 24 40C24 40 12 36 12 24V14L24 8Z" stroke="#FFD700" stroke-width="3" fill="none"/>
                        <path d="M18 26L23 32L32 18" stroke="#FFD700" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                            <radialGradient id="g2pro" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" gradientTransform="matrix(48 0 0 48 0 0)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD700" stop-opacity="0.18"/>
                                <stop offset="1" stop-color="#232B3E" stop-opacity="0.9"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="benefit-title">Risk Protection Mechanism</h3>
                <ul class="benefit-list">
                    <li>Multiple risk control systems</li>
                    <li>Loss compensation guarantee</li>
                    <li>Fund security guarantee</li>
                </ul>
            </div>
            <div class="vip-benefit-card">
                <div class="benefit-icon-wrapper">
                    <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" fill="url(#g3pro)"/>
                        <path d="M12 36H36L31 16L24 28L17 16L12 36Z" fill="#FFD700" stroke="#FFD700" stroke-width="2"/>
                        <circle cx="17" cy="16" r="2" fill="#FFD700"/>
                        <circle cx="24" cy="28" r="2" fill="#FFD700"/>
                        <circle cx="31" cy="16" r="2" fill="#FFD700"/>
                        <defs>
                            <radialGradient id="g3pro" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" gradientTransform="matrix(48 0 0 48 0 0)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD700" stop-opacity="0.18"/>
                                <stop offset="1" stop-color="#232B3E" stop-opacity="0.9"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="benefit-title">VIP Exclusive Services</h3>
                <ul class="benefit-list">
                    <li>One-on-one investment advisor</li>
                    <li>Exclusive investment events</li>
                    <li>Priority response service</li>
                </ul>
            </div>
            <div class="vip-benefit-card">
                <div class="benefit-icon-wrapper">
                    <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" fill="url(#g4pro)"/>
                        <rect x="12" y="16" width="24" height="10" rx="3" stroke="#FFD700" stroke-width="2.5" fill="none"/>
                        <path d="M24 16V26" stroke="#FFD700" stroke-width="2.5"/>
                        <circle cx="24" cy="12" r="2" fill="#FFD700"/>
                        <defs>
                            <radialGradient id="g4pro" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" gradientTransform="matrix(48 0 0 48 0 0)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD700" stop-opacity="0.18"/>
                                <stop offset="1" stop-color="#232B3E" stop-opacity="0.9"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <h3 class="benefit-title">Professional Training Support</h3>
                <ul class="benefit-list">
                    <li>Practical investment courses</li>
                    <li>Skill improvement plans</li>
                    <li>One-on-one expert guidance</li>
                </ul>
            </div>
      </div>
    </div>

    <!-- Membership Agreement Section -->
    <div class="vip-agreement-section" style="max-width: 1400px;">
      <div class="agreement-header">
        <h3 class="agreement-title">Membership Agreement</h3>
        <p class="agreement-desc">This platform is a paid service focused on providing members with professional investment strategies and market analysis. Members pay commissions based on actual profits. In the event of significant losses, the platform will compensate and share commissions according to the ratios shown in the membership level table.</p>
      </div>
      <!-- PC Table Comparison -->
      <div class="agreement-table-section agreement-table-pc">
        <h4 class="table-title">Membership Commission Mechanism</h4>
        <div class="table-wrapper">
          <table class="vip-table">
            <thead>
              <tr>
                <th>Membership Level</th>
                <th>Fund Range</th>
                <th>Monthly Profit Ratio</th>
                <th>Commission Ratio</th>
              </tr>
            </thead>
            <tbody>
             
              <tr v-for="value in vipList">
                <td><span class="member-level">{{value.name}}</span></td>
                <td>>={{value.min_trading_volume}}</td>
                <td><span class="highlight">{{value.monthly_profit_ratio}}%</span></td>
                <td><span class="highlight">{{value.commission_ratio}}%</span></td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
      <!-- Mobile Card Display -->
      <div class="agreement-mobile-cards">
        <div class="mobile-section">
          <div class="mobile-section-title">Membership Commission Mechanism</div>
          <div class="mobile-card-list">
            <div class="mobile-card" v-for="value in vipList">
              <div class="mobile-badge-row"><span class="mobile-badge vip">{{value.name}}</span></div>
              <div class="mobile-info-row"><span class="mobile-info-label">Fund Range</span><span class="mobile-info-value">>={{value.min_trading_volume}}</span></div>
              <div class="mobile-info-row"><span class="mobile-info-label">Monthly Profit Ratio</span><span class="mobile-info-value">{{value.monthly_profit_ratio}}%</span></div>
              <div class="mobile-info-row"><span class="mobile-info-label">Commission Ratio</span><span class="mobile-info-value">{{value.commission_ratio}}%</span></div>
            </div>
           
          </div>
        </div>
        <div class="mobile-section">
          <div class="mobile-section-title">Membership Compensation Mechanism</div>
          <div class="mobile-card-list">
            <div class="mobile-card" v-for="value in vipList">
              <div class="mobile-badge-row"><span class="mobile-badge vip">{{value.name}}</span></div>
              <div class="mobile-info-row"><span class="mobile-info-label">Fund Range</span><span class="mobile-info-value">>={{value.min_trading_volume}}</span></div>
              <div class="mobile-info-row"><span class="mobile-info-label">Risk Ratio</span><span class="mobile-info-value">{{value.monthly_profit_ratio}}%</span></div>
              <div class="mobile-info-row"><span class="mobile-info-label">Compensation Ratio</span><span class="mobile-info-value">{{value.commission_ratio}}%</span></div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="agreement-table-section agreement-table-pc">
        <h4 class="table-title">Membership Compensation Mechanism</h4>
        <div class="table-wrapper">
          <table class="vip-table">
            <thead>
              <tr>
                <th>Membership Level</th>
                <th>Fund Range</th>
                <th>Risk Ratio</th>
                <th>Compensation Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="value in vipList">
                <td><span class="member-level">{{value.name}}</span></td>
                <td>>={{value.min_trading_volume}}</td>
                <td><span class="highlight">{{value.risk_ratio}}%</span></td>
                <td><span class="highlight">{{value.compensation_ratio}}%</span></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
      <div class="agreement-footer">
        <a class="view-agreement-btn" :href="trader_profiles.agreement" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;">
          View Full Agreement
        </a>
      </div>
    </div>
  </div>
  </div>
  
  <!-- 会员排行榜弹窗 -->
  <div v-if="isRankingsModalOpen" class="rankings-modal-overlay" @click="closeRankingsModal">
    <div class="rankings-modal" @click.stop>
      <div class="rankings-modal-header">
        <h3 class="rankings-modal-title">Member Profit Ranking - All Members</h3>
        <button class="rankings-modal-close" @click="closeRankingsModal">×</button>
      </div>
      <div class="rankings-modal-content">
        <table class="rankings-modal-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Membership Level</th>
              <th>Total Profit</th>
              <th>Monthly Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in Vipdata.usersSort" :key="user.id" class="rank-row" style="border-bottom:1.5px solid rgba(255,215,0,0.13);background:linear-gradient(90deg,#232B3E 80%,#232e4a 100%);">
              <td style="text-align:center;font-weight:900;">
                <span style="font-size:1.6rem;" :style="{
                  color: index === 0 ? '#FFD700' : index === 1 ? '#b0c4e6' : index === 2 ? '#faad14' : '#fff',
                  textShadow: index <= 2 ? '0 0 8px rgba(255,215,0,0.6)' : 'none'
                }">
                  {{ index + 1 }}
                </span>
              </td>
              <td style="text-align:left;">
                <img :src="user.avatar_url || '/default-avatar.png'" 
                     :alt="user.username" 
                     style="width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid #FFD700;box-shadow:0 0 8px #FFD70033;">
              </td>
              <td style="text-align:left;font-weight:700;font-size:1.12rem;letter-spacing:1px;color:#fff;">{{ user.username }}</td>
              <td style="text-align:left;">
                <span class="membership-badge" :class="user.membership_level" style="font-size:1.08rem;font-weight:900;padding:6px 18px;border-radius:20px;box-shadow:0 0 12px #FFD70055;letter-spacing:1px;background:linear-gradient(90deg,#b0c4e6 60%,#FFD700 100%);color:#232B3E;">
                  {{ user.membership_level }}
                </span>
              </td>
              <td style="text-align:right;font-weight:900;">
                <span style="font-size:1.12rem;" :style="{
                  color: parseFloat(user.utotle_profit) > 0 ? '#00ffae' : parseFloat(user.utotle_profit) < 0 ? '#ff4d4f' : '#b0c4e6'
                }">
                  ${{ formatCurrency(user.utotle_profit) }}
                </span>
              </td>
              <td style="text-align:right;font-weight:900;">
                <span style="font-size:1.12rem;" :style="{
                  color: parseFloat(user.umonth_profit) > 0 ? '#52c41a' : parseFloat(user.umonth_profit) < 0 ? '#ff4d4f' : '#b0c4e6'
                }">
                  ${{ formatCurrency(user.umonth_profit) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>


<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import navcomponent from '../component/nav/nav.vue';
import{ get_userinfo,get_membership_levels,get_VipDashboardData,closetrades, updateUserAvatar, get_stock_prices } from '../../api/module/web/vip'
import{ gettrader_profiles} from '../../api/module/web/index'
import { uploadImage } from '../../api/module/commone'
import { useUserStore } from '@/store';
const router = useRouter();
const userStore = useUserStore()
// Video modal state
const isVideosModalOpen = ref(false);

// Open video modal
const openVideosModal = () => {
  isVideosModalOpen.value = true;
};

// Close video modal
const closeVideosModal = () => {
  isVideosModalOpen.value = false;
};

// Document modal state
const isDocumentsModalOpen = ref(false);

// Open document modal
const openDocumentsModal = () => {
  isDocumentsModalOpen.value = true;
};

// Close document modal
const closeDocumentsModal = () => {
  isDocumentsModalOpen.value = false;
};

// 获取盈亏颜色类
const getProfitColor = (value: number) => {
  if (value > 0) return 'profit-positive'; // 盈利用绿色
  if (value < 0) return 'profit-negative'; // 亏损用红色
  return 'profit-neutral'; // 中性用默认色
};

// Format date to US time format
const formatUSDate = (dateString: string) => {
  if (!dateString) return '';
  
  try {
    // 确保正确解析UTC时间字符串
    let date: Date;
    
    // 如果时间字符串没有时区信息，假设它是UTC时间
    if (dateString.includes('T') && !dateString.includes('Z') && !dateString.includes('+') && !dateString.includes('-', 10)) {
      // 添加Z表示UTC时间
      date = new Date(dateString + 'Z');
    } else {
      date = new Date(dateString);
    }
    
    // 验证日期是否有效
    if (isNaN(date.getTime())) {
      console.error('无效的时间字符串:', dateString);
      return dateString;
    }
    
    const usTime = date.toLocaleDateString('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    
    return usTime;
  } catch (error) {
    console.error('时间转换错误:', error, '原始时间:', dateString);
    return dateString; // If parsing fails, return original string
  }
};

// Format currency, add thousand separators
const formatCurrency = (amount: number | string) => {
  if (amount === null || amount === undefined || amount === '') return '0';
  
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return '0';
  
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// 格式化公告内容，改善HTML显示
const formatAnnouncementContent = (content: string) => {
  if (!content) return '';
  
  // 如果内容已经是HTML格式（包含<p>或<br>标签）
  if (content.includes('<p>') || content.includes('<br') || content.includes('</p>')) {
    // 清理并格式化现有的HTML
    let formatted = content
      // 移除标签间的多余空格和换行
      .replace(/<\/p>\s*<p>/g, '</p><p>')
      .replace(/<p>\s+/g, '<p>')
      .replace(/\s+<\/p>/g, '</p>')
      // 压缩多个连续空格为单个空格
      .replace(/\s+/g, ' ')
      .trim();
    
    // 确保每个<p>标签内容都被正确包裹，并添加class
    formatted = formatted.replace(/<p>(.*?)<\/p>/g, (match, p1) => {
      const trimmed = p1.trim();
      if (!trimmed) return '';
      // 保留原有的emoji和特殊字符
      return `<p class="announcement-paragraph">${trimmed}</p>`;
    });
    
    // 如果内容中有<br>标签，也处理一下
    formatted = formatted.replace(/<br\s*\/?>/gi, '<br>');
    
    return formatted;
  }
  
  // 如果内容不是HTML格式，尝试智能分割
  // 先按换行符分割
  let lines = content.split(/\n+/).filter(line => line.trim().length > 0);
  
  // 如果只有一行，尝试按句号、问号、感叹号分割
  if (lines.length === 1) {
    lines = content.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
  }
  
  // 将每个部分包装在<p>标签中
  return lines
    .map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      return `<p class="announcement-paragraph">${trimmed}</p>`;
    })
    .join('');
};

// Mock data
const recentTrades = ref([
  
]);
const traderTerms=ref<string[]>([])
const topUsers = ref([
 
]);
const trader_profiles=ref({});
const vipList=ref([])
let user_info=ref({});
let Vipdata=ref({});
let vedioslist=ref([])

// 排行榜显示控制 - 默认只显示前5名
const showAllRankings = ref(false);

// 计算显示的会员列表
const displayedUsers = computed(() => {
  if (!Vipdata.value.usersSort || !Array.isArray(Vipdata.value.usersSort)) {
    return [];
  }
  
  if (showAllRankings.value) {
    // 显示所有会员（最多50名）
    return Vipdata.value.usersSort.slice(0, 50);
  } else {
    // 只显示前5名
    return Vipdata.value.usersSort.slice(0, 5);
  }
});

// 切换排行榜显示模式
const toggleRankingsView = () => {
  showAllRankings.value = !showAllRankings.value;
};

// 排行榜弹窗控制
const isRankingsModalOpen = ref(false);

// 打开排行榜弹窗
const openRankingsModal = () => {
  isRankingsModalOpen.value = true;
};

// 关闭排行榜弹窗
const closeRankingsModal = () => {
  isRankingsModalOpen.value = false;
};

// 视频显示控制
const showAllVideos = ref(false);

// 计算显示的视频列表
const displayedVideos = computed(() => {
  if (!Vipdata.value.vedioslist || !Array.isArray(Vipdata.value.vedioslist)) {
    return [];
  }
  
  if (showAllVideos.value) {
    // 显示所有视频
    return Vipdata.value.vedioslist;
  } else {
    // 只显示前3个视频
    return Vipdata.value.vedioslist.slice(0, 3);
  }
});

// 切换视频显示模式
const toggleVideosView = () => {
  showAllVideos.value = !showAllVideos.value;
};

// 跳转到视频页面
const goToVideosPage = () => {
  router.push('/videos');
};

// 跳转到文档页面
const goToDocumentsPage = () => {
  router.push('/documents');
};

// 文档显示控制
const showAllDocuments = ref(false);

// 计算显示的文档列表
const displayedDocuments = computed(() => {
  if (!Vipdata.value.documentslist || !Array.isArray(Vipdata.value.documentslist)) {
    return [];
  }
  
  if (showAllDocuments.value) {
    // 显示所有文档
    return Vipdata.value.documentslist;
  } else {
    // 只显示前5个文档
    return Vipdata.value.documentslist.slice(0, 5);
  }
});

// 切换文档显示模式
const toggleDocumentsView = () => {
  showAllDocuments.value = !showAllDocuments.value;
};
onMounted(()=>{
  if(!userStore.userInfo.signing)
  {
    router.push('/vip')
  }
  try{
  Vipdata.value=userStore.VipData
  vipList.value=userStore.vipList
  
  // 如果已有数据，也要进行排序
  if (Vipdata.value && Object.keys(Vipdata.value).length > 0) {
    sortTradeLists();
  }
  }
  catch{}
 get_user_info()
 getVipDashboardData()
 gettraderprofiles()
 get_membership_levels_list()
 
 // Set timer to update stock prices every 30 seconds
 setInterval(() => {
   if (Vipdata.value && (Vipdata.value.tradelist || Vipdata.value.user_trade_list)) {
     updateStockPrices();
   }
 }, 30000);
})
const gettraderprofiles= async()=>{
  try {
    const res=await gettrader_profiles();
    if(res && res.success && res.data && res.data.trader_profiles){
      if (res.data.trader_profiles.terms && typeof res.data.trader_profiles.terms === 'string') {
        traderTerms.value = res.data.trader_profiles.terms.split('\n').filter(term => term.trim() !== '');
      } else if (typeof res.data.trader_profiles === 'string') {
        traderTerms.value = res.data.trader_profiles.split('\n').filter(term => term.trim() !== '');
      }
    }
  } catch (error) {
    console.error('Error fetching trader profiles:', error);
  }
};
const get_membership_levels_list=async()=>{
  try {
    const res=await get_membership_levels()
    if(res && res.success && res.data && Array.isArray(res.data))
    {
      vipList.value=res.data
      vipList.value.forEach(item => {
        if(item && item.benefits && typeof item.benefits === 'string') {
          item.benefits=item.benefits.split(',')
        }
      });
      userStore.vipList=vipList.value
    }
  } catch (error) {
    console.error('Error fetching membership levels:', error);
  }
}
const get_user_info=async()=>{
  try {
    const res=await get_userinfo();
    if(res && res.success && res.data){
      user_info.value=res.data;
    } else {
      // 如果API失败，至少保持空对象
      user_info.value = user_info.value || {};
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    user_info.value = user_info.value || {};
  }
}

// 会员等级相关函数
const getMembershipClass = (level: string) => {
  if (!level) return 'membership-regular';
  const levelLower = level.toLowerCase();
  if (levelLower.includes('gold')) return 'membership-gold';
  if (levelLower.includes('diamond')) return 'membership-diamond';
  if (levelLower.includes('supreme') || levelLower.includes('platinum') || levelLower.includes('black')) return 'membership-supreme';
  return 'membership-regular';
};

const getMembershipBadgeClass = (level: string) => {
  if (!level) return 'badge-regular';
  const levelLower = level.toLowerCase();
  if (levelLower.includes('gold')) return 'badge-gold';
  if (levelLower.includes('diamond')) return 'badge-diamond';
  if (levelLower.includes('supreme') || levelLower.includes('platinum') || levelLower.includes('black')) return 'badge-supreme';
  return 'badge-regular';
};

const isPremiumMember = (level: string) => {
  if (!level) return false;
  const levelLower = level.toLowerCase();
  return levelLower.includes('gold') || levelLower.includes('diamond') || levelLower.includes('supreme') || levelLower.includes('platinum') || levelLower.includes('black');
};

const getWelcomeMessage = (level: string) => {
  if (!level) return 'Let professional investment strategies help you grow your wealth';
  const levelLower = level.toLowerCase();
  if (levelLower.includes('gold')) {
    return 'Your exclusive access to premium strategies and personalized guidance';
  }
  if (levelLower.includes('diamond')) {
    return 'Welcome to the elite tier - experience unparalleled investment excellence';
  }
  if (levelLower.includes('supreme') || levelLower.includes('platinum') || levelLower.includes('black')) {
    return 'The pinnacle of trading excellence - welcome to your exclusive command center';
  }
  return 'Let professional investment strategies help you grow your wealth';
};
const getVipDashboardData=async()=>{
  try {
    const res=await get_VipDashboardData();
    if(res && res.success && res.data){
      Vipdata.value=res.data;
      userStore.VipData=res.data
      
      // 对交易列表进行排序
      sortTradeLists();
      
      // Get real-time prices for all held stocks
      await updateStockPrices();
    } else {
      // 如果API失败，至少保持空对象
      Vipdata.value = Vipdata.value || {};
    }
  } catch (error) {
    console.error('Error fetching VIP dashboard data:', error);
    Vipdata.value = Vipdata.value || {};
  }
}

// 排序交易列表函数
const sortTradeLists = () => {
  // 对 VIP 交易列表排序
  if (Vipdata.value && Vipdata.value.tradelist && Array.isArray(Vipdata.value.tradelist)) {
    Vipdata.value.tradelist.sort((a: any, b: any) => {
      // 首先按持仓状态排序：持仓在前，平仓在后
      const isHoldingA = !a.exit_price;
      const isHoldingB = !b.exit_price;
      
      if (isHoldingA !== isHoldingB) {
        return isHoldingA ? -1 : 1; // 持仓在前
      }
      
      // 同状态内按时间排序
      if (isHoldingA) {
        // 持仓的按买入时间排序（最新的在前）
        const dateA = new Date(a.entry_date);
        const dateB = new Date(b.entry_date);
        return dateB.getTime() - dateA.getTime();
      } else {
        // 平仓的按平仓时间排序（最新的在前）
        const dateA = new Date(a.exit_time || a.entry_date);
        const dateB = new Date(b.exit_time || b.entry_date);
        return dateB.getTime() - dateA.getTime();
      }
    });
  }
  
  // 对用户交易列表排序
  if (Vipdata.value.user_trade_list && Array.isArray(Vipdata.value.user_trade_list)) {
    Vipdata.value.user_trade_list.sort((a: any, b: any) => {
      // 首先按持仓状态排序：持仓在前，平仓在后
      const isHoldingA = !a.exit_price;
      const isHoldingB = !b.exit_price;
      
      if (isHoldingA !== isHoldingB) {
        return isHoldingA ? -1 : 1; // 持仓在前
      }
      
      // 同状态内按时间排序
      if (isHoldingA) {
        // 持仓的按买入时间排序（最新的在前）
        const dateA = new Date(a.entry_date);
        const dateB = new Date(b.entry_date);
        return dateB.getTime() - dateA.getTime();
      } else {
        // 平仓的按平仓时间排序（最新的在前）
        const dateA = new Date(a.exit_date || a.entry_date);
        const dateB = new Date(b.exit_date || b.entry_date);
        return dateB.getTime() - dateA.getTime();
      }
    });
  }
}

// Update real-time stock prices
const updateStockPrices = async () => {
  try {
    // Collect all held stock symbols
    const symbols = [];
    
    // Collect stock symbols from VIP trading records
    if (Vipdata.value.tradelist) {
      Vipdata.value.tradelist.forEach(trade => {
        if (trade.symbol && !trade.exit_price) { // Only get open positions
          symbols.push(trade.symbol);
        }
      });
    }
    
    // Collect stock symbols from user trading records
    if (Vipdata.value.user_trade_list) {
      Vipdata.value.user_trade_list.forEach(trade => {
        if (trade.symbol && !trade.exit_price) { // Only get open positions
          symbols.push(trade.symbol);
        }
      });
    }
    
    // Remove duplicates
    const uniqueSymbols = [...new Set(symbols)];
    
    if (uniqueSymbols.length > 0) {
      console.log('Updating stock prices for symbols:', uniqueSymbols);
      try {
        // Call price API
        console.log('Calling stock price API with symbols:', uniqueSymbols);
        const priceRes = await get_stock_prices(uniqueSymbols);
        console.log('Stock price API response:', priceRes);
        
        if (priceRes && priceRes.success && priceRes.data) {
          const priceMap = priceRes.data;
          console.log('Price map received:', priceMap);
          
          // Update prices in VIP trading records
          if (Vipdata.value.tradelist) {
            Vipdata.value.tradelist.forEach(trade => {
              if (priceMap[trade.symbol]) {
                trade.current_price = priceMap[trade.symbol];
              }
            });
          }
          
          // Update prices in user trading records
          if (Vipdata.value.user_trade_list) {
            Vipdata.value.user_trade_list.forEach(trade => {
              if (priceMap[trade.symbol]) {
                trade.current_price = priceMap[trade.symbol];
              }
            });
          }
          
          // Update data in store
          userStore.VipData = Vipdata.value;
        } else {
          console.warn('Stock price API returned unsuccessful response:', priceRes);
          // Use mock prices when API returns unsuccessful response
          const mockPrices = {};
          uniqueSymbols.forEach(symbol => {
            mockPrices[symbol] = Math.random() * 100 + 10; // Mock prices 10-110
          });
          
          // Update prices in VIP trading records
          if (Vipdata.value.tradelist) {
            Vipdata.value.tradelist.forEach(trade => {
              if (mockPrices[trade.symbol]) {
                trade.current_price = mockPrices[trade.symbol];
              }
            });
          }
          
          // Update prices in user trading records
          if (Vipdata.value.user_trade_list) {
            Vipdata.value.user_trade_list.forEach(trade => {
              if (mockPrices[trade.symbol]) {
                trade.current_price = mockPrices[trade.symbol];
              }
            });
          }
          
          // Update data in store
          userStore.VipData = Vipdata.value;
        }
      } catch (apiError) {
        console.error('Stock price API error:', apiError);
        console.warn('Stock price API temporarily unavailable, using mock prices:', apiError);
        // If API is unavailable, use mock prices
        const mockPrices = {};
        uniqueSymbols.forEach(symbol => {
          mockPrices[symbol] = Math.random() * 100 + 10; // Mock prices 10-110
        });
        
        // Update prices in VIP trading records
        if (Vipdata.value.tradelist) {
          Vipdata.value.tradelist.forEach(trade => {
            if (mockPrices[trade.symbol]) {
              trade.current_price = mockPrices[trade.symbol];
            }
          });
        }
        
        // Update prices in user trading records
        if (Vipdata.value.user_trade_list) {
          Vipdata.value.user_trade_list.forEach(trade => {
            if (mockPrices[trade.symbol]) {
              trade.current_price = mockPrices[trade.symbol];
            }
          });
        }
        
        // Update data in store
        userStore.VipData = Vipdata.value;
      }
    }
  } catch (error) {
    console.error('Failed to update stock prices:', error);
  }
}
// Click event handler - navigate to new page
const handleUploadTradeRecord = () => {
  router.push('/trade-upload');
};

const handleSettingsClick = () => {
  router.push('/settings');
};

// Close Trade Modal related state and functions
const isCloseTradeModalOpen = ref(false);
const selectedTrade = ref(null);
const closeTradeForm = ref({
  exitPrice: '',
  exitDate: '',
  tradeFile: null
});
const fileUrl = ref('');
const isUploading = ref(false); // Upload status flag

// Open close trade modal
const openCloseTradeModal = (trade) => {
  selectedTrade.value = trade;
  closeTradeForm.value = {
    exitPrice: '',
    exitDate: new Date().toISOString().split('T')[0], // Default today
    tradeFile: null
  };
  fileUrl.value = '';
  isCloseTradeModalOpen.value = true;
};

// Close close trade modal
const closeCloseTradeModal = () => {
  isCloseTradeModalOpen.value = false;
  selectedTrade.value = null;
  fileUrl.value = '';
};

// Handle image upload
const handleImageChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    // Set uploading state
    isUploading.value = true;
    
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('file', file);
      
      // Call uploadImage API to upload image
      const response = await uploadImage(formData);
      
      // Assume the response contains image URL
      // Field name may need adjustment based on actual API response
      fileUrl.value = response.data.url || URL.createObjectURL(file);
      closeTradeForm.value.tradeFile = file;
      
      console.log('Image upload successful:', response);
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Image upload failed, please try again');
      fileUrl.value = '';
      closeTradeForm.value.tradeFile = null;
    } finally {
      // Reset upload state
      isUploading.value = false;
      // Clear input to allow selecting the same file again
      event.target.value = '';
    }
  }
};

// Confirm close trade
  const confirmCloseTrade = async () => {
    if (!selectedTrade.value || !closeTradeForm.value.exitPrice || !closeTradeForm.value.exitDate) {
      alert('Please fill in the exit price and exit date');
      return;
    }
    
    try {
      // Construct request data
      const tradeData = {
        id: selectedTrade.value.id,
        exit_price: closeTradeForm.value.exitPrice,
        exit_date: closeTradeForm.value.exitDate,
        image_url: fileUrl.value // Pass image URL
      };
      
      // Call API to close trade
      const response = await closetrades(tradeData);
      
      if (response.success) {
        // Refresh data after success
        await getVipDashboardData();
        closeCloseTradeModal();
        alert('Transaction closed successfully');
      } else {
        throw new Error(response.message || 'Closing transaction failed');
      }
    } catch (error) {
      console.error('Closing transaction failed:', error);
      alert(error.message || 'Closing transaction');
    }
  };

  // Avatar upload related logic
  const avatarFileInput = ref<HTMLInputElement | null>(null);
  const isAvatarUploading = ref(false);
  
  // Click avatar to trigger file selection
  const handleAvatarClick = () => {
    if (avatarFileInput.value) {
      avatarFileInput.value.click();
    }
  };
  
  // Handle avatar file selection
  const handleAvatarFileChange = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (file) {
      isAvatarUploading.value = true;
      
      // Show uploading prompt
      console.log('Uploading avatar, please wait...');
      
      try {
        // Create FormData object
        const formData = new FormData();
        formData.append('file', file);
        
        // Call uploadImage API to upload image
        const uploadResponse = await uploadImage(formData);
        
        if (uploadResponse.success) {
          // 假设返回的response包含图片URL
          const imageUrl = uploadResponse.data.url;
          
          // 调用updateUserAvatar接口更新用户头像
          const updateResponse = await updateUserAvatar({ avatar_url: imageUrl });
          
          if (updateResponse.success) {
            // 成功后刷新用户信息
            await get_user_info();
            // 更新本地预览
            if (user_info.value) {
              user_info.value.avatar_url = imageUrl;
            }
            alert('Avatar updated successfully');
          } else {
            throw new Error(updateResponse.message || 'Failed to update avatar');
          }
        } else {
          throw new Error(uploadResponse.message || 'Failed to upload image');
        }
      } catch (error) {
        console.error('Avatar upload failed:', error);
        alert(error instanceof Error ? error.message : 'Failed to upload avatar, please try again');
      } finally {
        // Reset upload state和input
        isAvatarUploading.value = false;
        if (input) {
          input.value = '';
        }
      }
    }
  };
</script>

<style scoped>
 /* Form Styles for Modals */
 .form-item {
   margin-bottom: 16px;
 }
 
 .form-item label {
   display: block;
   margin-bottom: 8px;
   color: #333;
   font-weight: 500;
 }
 
 .form-input,
 .form-select {
   width: 100%;
   padding: 8px 12px;
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   transition: all 0.3s;
 }
 
 .form-input:focus,
 .form-select:focus {
   outline: none;
   border-color: #4096ff;
   box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
 }
 
 /* Modal z-index settings */
 .modal {
   z-index: 9999 !important;
 }
 
 .modal-backdrop {
   z-index: 1040;
 }
 
 .app-container {
         background: linear-gradient(120deg, #0A0E1A 0%, #131722 50%, #1A1F2E 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
  align-items: center;
  overflow-x: hidden;
         overflow-y: auto;
  min-height: 100vh;
}

/* 添加光纤划过效果 */
.app-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.03) 30%,
    rgba(255, 255, 255, 0.05) 40%,
    transparent 100%
  );
  animation: lightBeam 8s infinite linear;
  pointer-events: none;
  align-items: center;
}

/* 增强背景科技感 */
.app-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 255, 174, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.02) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* 数字流动背景效果 */
.number-flow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.number-flow::before,
.number-flow::after {
  content: '';
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 200px;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 50px,
    rgba(255, 215, 0, 0.03) 50px,
    rgba(255, 215, 0, 0.03) 100px
  );
  animation: numberFlow 15s infinite linear;
}

.number-flow::after {
  animation-delay: 7s;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 80px,
    rgba(0, 255, 174, 0.02) 80px,
    rgba(0, 255, 174, 0.02) 120px
  );
}

@keyframes numberFlow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes lightBeam {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(200%) rotate(45deg); }
}
        /* Add forced-colors media query */
        @media (forced-colors: active) {
            .gold-text { forced-color-adjust: none; }
            .green-text { forced-color-adjust: none; }
            .big-number { forced-color-adjust: none; }
            .gold-number { forced-color-adjust: none; }
            .card-title, .section h2, .agreement-title, h2.card-title { forced-color-adjust: none; }
            .styled-button, .ant-btn-primary { forced-color-adjust: none; }
            .avatar-glow, .ant-avatar { forced-color-adjust: none; }
            .glass-stat-card { forced-color-adjust: none; }
            .glass-stat-label { forced-color-adjust: none; }
            .glass-stat-value { forced-color-adjust: none; }
            .glass-stat-sub { forced-color-adjust: none; }
            .ant-table { forced-color-adjust: none; }
            .ant-table-thead > tr > th { forced-color-adjust: none; }
            .ant-table-tbody > tr > td { forced-color-adjust: none; }
            .ant-tag { forced-color-adjust: none; }
            .ant-progress-bg { forced-color-adjust: none; }
            .ant-btn-link { forced-color-adjust: none; }
        }
        .main-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 48px 32px 80px 32px;
            position: relative;
            z-index: 1;
        }
        @media (max-width: 900px) { .main-content { padding: 24px 8px 40px 8px; } }
        .section {
            background: rgba(24, 31, 42, 0.98);
            border-radius: 28px;
            box-shadow: 0 12px 48px 0 #181F2A55, 0 2px 24px #FFD70022;
            margin-bottom: 48px;
            padding: 48px 36px;
            border: 1.5px solid rgba(255,255,255,0.08);
            position: relative;
           
        }
        @media (max-width: 600px) {
          html, body {
            background: linear-gradient(135deg, #232B3E 60%, #222a3a 100%) !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100vw !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
          .main-content {
            max-width: 100vw !important;
            width: 100vw !important;
            min-width: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            left: 0 !important;
            position: relative !important;
            background: none !important;
            box-shadow: none !important;
          }
          .section {
            padding: 8px 0 !important;
            min-height: unset !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: none !important;
            border: none !important;
          }
          .vip-trade-cards-blackgold {
            padding: 0 !important;
            min-height: unset !important;
            margin-bottom: 0 !important;
            box-shadow: none !important;
            background: none !important;
          }
          .vip-trade-card-blackgold {
            margin: 0 0 16px 0;
            width: 100vw !important;
            max-width: 100vw !important;
            border-radius: 0 !important;
          }
        }
        .gold-text { 
            color: #FFD700; 
            font-weight: 900; 
            letter-spacing: 1px;
            background: linear-gradient(135deg, #FFD700 0%, #FFE55C 50%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
            animation: titleGlow 3s ease-in-out infinite alternate;
        }
        .green-text { 
            color: #00FFAE; 
            font-weight: 700;
            text-shadow: 0 0 20px rgba(0, 255, 174, 0.4);
        }
        .big-number { 
            font-family: 'Roboto Mono', 'Inter', monospace; 
            font-size: 2.6rem; 
            color: #00ffae; 
            font-weight: 900; 
            text-shadow: 
                0 0 16px #00ffae55,
                0 0 32px rgba(0, 255, 174, 0.3);
            animation: pulseGreen 2s ease-in-out infinite alternate;
        }
        .gold-number { 
            color: #ffd700; 
            text-shadow: 
                0 0 16px #ffd70077,
                0 0 32px rgba(255, 215, 0, 0.4);
            animation: pulseGold 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
            0% { text-shadow: 0 0 30px rgba(255, 215, 0, 0.3); }
            100% { text-shadow: 0 0 50px rgba(255, 215, 0, 0.7); }
        }

        @keyframes pulseGreen {
            0% { text-shadow: 0 0 16px #00ffae55, 0 0 32px rgba(0, 255, 174, 0.2); }
            100% { text-shadow: 0 0 24px #00ffae88, 0 0 48px rgba(0, 255, 174, 0.4); }
        }

        @keyframes pulseGold {
            0% { text-shadow: 0 0 16px #ffd70077, 0 0 32px rgba(255, 215, 0, 0.3); }
            100% { text-shadow: 0 0 24px #ffd700aa, 0 0 48px rgba(255, 215, 0, 0.5); }
        }
        .card-title,
        .section h2,
        .agreement-title,
        h2.card-title {
            color: #FFD700 !important;
            font-weight: 900;
            letter-spacing: 1px;
            text-shadow: 0 2px 8px #181F2A88;
            margin-top: 36px;
            margin-bottom: 28px;
            position: relative;
            z-index: 2;
            background: transparent;
            display: inline-block;
        }
        .styled-button, .ant-btn-primary {
            background: linear-gradient(135deg, #FFD700 0%, #FFB300 50%, #FFD700 100%) !important;
            color: #181F2A !important;
            border: none !important;
            font-weight: 900;
            border-radius: 16px !important;
            box-shadow: 
                0 8px 32px rgba(255, 215, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 0 0 1px rgba(255, 215, 0, 0.5);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            height: 48px;
            padding: 0 32px;
            font-size: 1.15rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .styled-button::before, .ant-btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.4), 
                transparent
            );
            transition: left 0.5s ease;
        }

        .styled-button:hover::before, .ant-btn-primary:hover::before {
            left: 100%;
        }
        .styled-button:hover, .ant-btn-primary:hover {
            background: linear-gradient(135deg, #FFE066 0%, #FFD700 50%, #FFE066 100%) !important;
            color: #181F2A !important;
            box-shadow: 
                0 16px 48px rgba(255, 215, 0, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.4),
                0 0 0 2px rgba(255, 215, 0, 0.7),
                0 0 60px rgba(255, 215, 0, 0.2);
            transform: translateY(-4px) scale(1.05);
        }
        .avatar-glow, .ant-avatar {
            border: 3px solid #FFD700 !important;
            box-shadow: 
                0 0 30px rgba(255, 215, 0, 0.8),
                0 0 0 8px rgba(255, 215, 0, 0.15),
                0 0 60px rgba(255, 215, 0, 0.3);
            background: linear-gradient(135deg, #232b3e 0%, #2a3444 100%) !important;
            animation: avatarGlow 4s ease-in-out infinite alternate;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        @keyframes avatarGlow {
            0% {
                box-shadow: 
                    0 0 30px rgba(255, 215, 0, 0.6),
                    0 0 0 8px rgba(255, 215, 0, 0.1),
                    0 0 60px rgba(255, 215, 0, 0.2);
            }
            100% {
                box-shadow: 
                    0 0 45px rgba(255, 215, 0, 0.9),
                    0 0 0 12px rgba(255, 215, 0, 0.25),
                    0 0 80px rgba(255, 215, 0, 0.4);
            }
        }
        .glass-stat-card-grid {
            display: flex;
            gap: 40px;
            justify-content: space-between;
            margin: 48px 0 40px 0;
            flex-wrap: wrap;
        }
        .glass-stat-card {
            flex: 1 1 0%;
            min-width: 0;
            max-width: none;
            background: linear-gradient(135deg, #232B3E 60%, #222a3a 100%);
            border-radius: 24px;
            box-shadow: 
                0 8px 32px #181F2A44, 
                0 0 0 2px #FFD70033,
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            border: 1.5px solid rgba(255, 255, 255, 0.12);
            color: #fff;
            padding: 40px 28px;
            margin-bottom: 18px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }

        .glass-stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                #FFD700 20%, 
                #FFE55C 50%, 
                #FFD700 80%, 
                transparent 100%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .glass-stat-card:hover::before {
            opacity: 0.8;
        }
        @media (max-width: 900px) {
            .glass-stat-card-grid { gap: 16px; }
            .glass-stat-card { padding: 18px 8px; min-width: 120px; border-radius: 10px; }
        }
        .glass-stat-card:hover {
            box-shadow: 
                0 20px 80px 0 #FFD70055, 
                0 0 0 3px #FFD700,
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 0 60px rgba(255, 215, 0, 0.15);
            border-color: #FFD700;
            transform: translateY(-8px) scale(1.05);
            background: linear-gradient(135deg, #2a3444 60%, #252d3a 100%);
        }
        .glass-stat-label { 
            color: rgba(200, 210, 230, 1); 
            font-size: 1rem; 
            margin-bottom: 16px; 
            font-weight: 800; 
            height: auto; 
            letter-spacing: 1.5px;
            text-transform: uppercase;
            position: relative;
            z-index: 2;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        .glass-stat-value {
            font-size: 2.4rem;
            font-weight: 900;
            margin-bottom: 10px;
            letter-spacing: 0.5px;
            word-break: break-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: 'Roboto Mono', 'Courier New', monospace;
            position: relative;
            z-index: 2;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-shadow: 
                0 1px 2px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.6);
        }
        .glass-stat-sub { color: #ffd700; font-size: 1.1rem; margin-top: 8px; font-weight: 700; }
        .glass-stat-unit { font-size: 1.1rem; margin-left: 4px; color: #b0c4e6; }
        .ant-table { background: transparent !important; color: #fff; border-radius: 16px; overflow: hidden; }
        .ant-table-thead > tr > th { background: #232e4a !important; color: #FFD700 !important; font-weight: 900; font-size: 1.1rem; border-bottom: 2.5px solid #FFD700; text-align: center; letter-spacing: 1px; }
        .ant-table-tbody > tr > td { background: transparent !important; color: #fff; font-size: 1.05rem; border-bottom: 1.5px solid #2e3c5d !important; text-align: center; font-weight: 600; }
        .ant-table-tbody > tr:hover > td { background: #232b3e !important; }
        .ant-tag { border-radius: 10px !important; font-weight: 900; font-size: 1.05rem; padding: 2px 16px; letter-spacing: 1px; }
        .ant-progress-bg { border-radius: 8px !important; }
        .ant-btn-link { color: #FFD700 !important; font-weight: 900; }
        .ant-btn-link:hover { color: #FFB300 !important; }
        .flex-row { display: flex; flex-wrap: wrap; gap: 40px; }
        .flex-col { display: flex; flex-direction: column; gap: 18px; }
        .mb-32 { margin-bottom: 32px; }
        .mb-24 { margin-bottom: 24px; }
        .mb-16 { margin-bottom: 16px; }
        .mt-24 { margin-top: 24px; }
        .center { text-align: center; }
        .w-100 { width: 100%; }
        .card {
            background: 
                linear-gradient(135deg, 
                    rgba(15, 20, 30, 0.98) 0%, 
                    rgba(22, 28, 40, 0.98) 50%, 
                    rgba(28, 35, 48, 0.98) 100%
                ),
                radial-gradient(circle at top right, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
            border-radius: 18px;
            padding: 32px 28px;
            margin-bottom: 28px;
            color: #fff;
            border: 2px solid rgba(255, 215, 0, 0.2);
            box-shadow: 
                0 10px 40px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(0, 0, 0, 0.6),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.12),
                inset 0 -1px 0 rgba(0, 0, 0, 0.4),
                inset 2px 2px 4px rgba(255, 215, 0, 0.05);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
        }
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.02) 0%, 
                    transparent 50%,
                    rgba(0, 0, 0, 0.03) 100%
                );
            border-radius: 18px;
            pointer-events: none;
            opacity: 0.6;
        }
        .card:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 215, 0, 0.4);
            box-shadow: 
                0 16px 64px rgba(255, 215, 0, 0.15),
                0 6px 20px rgba(0, 0, 0, 0.7),
                0 0 0 1px rgba(255, 255, 255, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.18),
                inset 0 -1px 0 rgba(0, 0, 0, 0.5),
                inset 2px 2px 6px rgba(255, 215, 0, 0.08);
        }
        .progress-bar { background: linear-gradient(90deg,#FFD700 0%,#FFB300 100%); height: 10px; border-radius: 8px; box-shadow: 0 2px 8px #FFD70033; }
        .progress-labels { display: flex; justify-content: space-between; color: #b0c4e6; font-size: 1.05rem; margin-top: 10px; font-weight: 600; }
        /* 福利卡片优化 */
        .benefit-card { box-shadow: 0 8px 32px #FFD70022, 0 0 0 2px #FFD70022; border: 1.5px solid #FFD70033; background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%); }
        .benefit-card:hover { box-shadow: 0 16px 64px 0 #FFD70044, 0 0 0 3px #FFD700; border-color: #FFD700; transform: translateY(-6px) scale(1.04); }
        .benefit-card img { filter: drop-shadow(0 0 8px #FFD70088); }
        /* 响应式调整 - 表格部分 */
        @media (max-width: 1200px) {
            .vip-benefit-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .vip-benefit-grid {
                grid-template-columns: 1fr;
            }
            
            .table-wrapper {
                padding: 0 2px;
                border-radius: 8px;
                min-width: unset;
                max-width: 100vw;
                overflow-x: auto;
            }
            
            .vip-table {
                font-size: 0.98rem;
                min-width: 600px;
                border-radius: 8px;
            }
            
            .vip-table th, .vip-table td {
                padding: 8px 4px;
            }
        }
        
        @media (max-width: 480px) {
            .vip-table {
                font-size: 0.92rem;
                min-width: 480px;
            }
        }
        /* 分割线 */
        .divider { height: 1.5px; background: linear-gradient(90deg,#FFD70022 0%,#FFD70088 50%,#FFD70022 100%); border: none; margin: 40px 0; }
        /* 福利卡片高端升级 */
        .benefit-row { gap: 48px !important; }
        .benefit-card {
            background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
            box-shadow: 0 12px 48px #FFD70033, 0 0 0 3px #FFD70033;
            border: 2.5px solid #FFD70044;
            border-radius: 32px;
            transition: all 0.35s cubic-bezier(.4,2,.6,1);
            position: relative;
            min-width: 260px;
            aspect-ratio: 1/1;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: 0;
        }
        .benefit-card:hover {
            box-shadow: 0 24px 64px 0 #FFD70077, 0 0 0 5px #FFD700;
            border-color: #FFD700;
            transform: translateY(-10px) scale(1.06);
            z-index: 2;
        }
        .benefit-card img {
            filter: drop-shadow(0 0 16px #FFD70088);
        }
        @media (max-width: 1200px) {
            .benefit-row { gap: 24px !important; }
            .benefit-card { min-width: 48% !important; max-width: 48% !important; margin-bottom: 24px; }
        }
        @media (max-width: 900px) {
            .benefit-row { gap: 16px !important; }
            .benefit-card { min-width: 98% !important; max-width: 100% !important; margin-bottom: 18px; }
        }
        /* VIP交易记录表格样式 */
        .vip-table {
            width: 100%;
            min-width: 1440px;
            table-layout: auto;
            border-collapse: separate;
            border-spacing: 0 6px;
            background: rgba(24, 31, 42, 0.98);
        }
        
        .vip-table th {
            background: linear-gradient(90deg, #232e4a 0%, #181F2A 100%);
            color: #FFD700;
            font-weight: 700;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #FFD700;
        }
        
        .vip-table td {
            padding: 16px 20px;
            text-align: center;
            color: #fff;
            border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        .vip-table tr:hover td {
            background: rgba(255, 215, 0, 0.05);
        }
        
        .trade-type-table.buy {
            background: #00ffae22;
            color: #00ffae;
            border: 1.5px solid #00ffae;
            border-radius: 12px;
            padding: 2px 14px;
            font-weight: 700;
        }
        
        .trade-type-table.sell {
            background: #cf132222;
            color: #cf1322;
            border: 1.5px solid #cf1322;
            border-radius: 12px;
            padding: 2px 14px;
            font-weight: 700;
        }
        
        .trade-profit-table.profit-positive {
            color: #00ffae;
            font-weight: 900;
        }
        
        .trade-profit-table.profit-negative {
            color: #cf1322;
            font-weight: 900;
        }
        
        .trade-profit-table.profit-neutral {
            color: #ffffff;
            font-weight: 600;
        }
        @media (min-width: 1200px) {
            .benefit-row { gap: 56px !important; }
            .benefit-card { min-width: 340px !important; max-width: 24% !important; height: 340px !important; }
        }
        @media (max-width: 1199px) {
            .benefit-row { gap: 24px !important; }
            .benefit-card { min-width: 48% !important; max-width: 48% !important; height: 320px !important; }
        }
        @media (max-width: 900px) {
            .benefit-row { gap: 16px !important; }
            .benefit-card { min-width: 98% !important; max-width: 100% !important; height: auto !important; }
        }
        /* VIP福利卡片网格布局 */
        .vip-benefit-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin-bottom: 48px;
        }

        /* VIP福利卡片样式 */
        .vip-benefit-card {
            background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
            border-radius: 24px;
            padding: 32px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1.5px solid rgba(255, 215, 0, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .vip-benefit-card:hover {
            transform: translateY(-8px);
            border-color: #FFD700;
            box-shadow: 0 16px 48px rgba(255, 215, 0, 0.15);
        }

        .benefit-icon-wrapper {
            margin-bottom: 24px;
            display: inline-block;
            padding: 16px;
            background: rgba(255, 215, 0, 0.1);
            border-radius: 50%;
        }

        .benefit-title {
            color: #FFD700;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .benefit-list {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: left;
        }

        .benefit-list li {
            color: #b0c4e6;
            margin-bottom: 12px;
            padding-left: 24px;
            position: relative;
        }

        .benefit-list li:before {
            content: "•";
            color: #FFD700;
            position: absolute;
            left: 0;
            font-size: 1.2rem;
        }

        /* 会员协议部分样式 */
        .vip-agreement-section {
            background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
            border-radius: 24px;
            padding: 40px;
            margin-top: 48px;
            border: 1.5px solid rgba(255, 215, 0, 0.1);
        }

        .agreement-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .agreement-title {
            color: #FFD700;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .agreement-desc {
            color: #b0c4e6;
            font-size: 1.1rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
        }

        .agreement-table-section {
            margin-bottom: 40px;
            width: 100%;
        }

        .table-title {
            color: #FFD700;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 24px;
            text-align: center;
        }

        .table-wrapper {
            overflow-x: auto;
            padding: 0 8px;
            margin: 0 auto;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            background: none;
            width: 100%;
            max-width: 100%;
        }

        .vip-table {
            width: 100%;
            min-width: 1440px;
            table-layout: auto;
            border-collapse: separate;
            border-spacing: 0 6px;
            background: rgba(24, 31, 42, 0.98);
        }

        .vip-table th {
            background: linear-gradient(90deg, #232e4a 0%, #181F2A 100%);
            color: #FFD700;
            font-weight: 700;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #FFD700;
        }

        .vip-table td {
            padding: 16px 20px;
            text-align: center;
            color: #fff;
            border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }

        .vip-table tr:hover td {
            background: rgba(255, 215, 0, 0.05);
        }

        .member-level {
            color: #FFD700;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            background: rgba(255, 215, 0, 0.1);
        }

        .highlight {
            color: #FFD700;
            font-weight: 700;
        }

        .agreement-footer {
            text-align: center;
            margin-top: 40px;
        }

        .view-agreement-btn {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 100%);
            color: #181F2A;
            border: none;
            padding: 12px 32px;
            border-radius: 24px;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .view-agreement-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
        }

        /* 响应式调整 */
        @media (max-width: 1200px) {
            .vip-benefit-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .vip-benefit-grid {
                grid-template-columns: 1fr;
            }

            .vip-agreement-section {
                padding: 24px;
            }

            .agreement-title {
                font-size: 1.5rem;
            }

            .table-title {
                font-size: 1.2rem;
            }
            .card-title {
                font-size: 1.3rem;
                margin-bottom: 18px;
            }
            .section {
                padding: 12px 2px;
                margin-bottom: 12px;
                border-radius: 10px;
            }
            .card {
                padding: 16px 8px;
                border-radius: 10px;
            }
            .glass-stat-card {
                padding: 18px 8px;
                min-width: 120px;
                border-radius: 10px;
            }
            .glass-stat-label, .glass-stat-value, .glass-stat-sub {
                font-size: 0.98rem;
            }
            .benefit-title {
                font-size: 1.1rem;
            }
            .benefit-list li {
                font-size: 0.98rem;
            }
            .vip-benefit-card {
                padding: 16px 8px;
                border-radius: 10px;
            }
            .vip-agreement-section {
                border-radius: 10px;
            }
            .agreement-header {
                margin-bottom: 18px;
            }
            .agreement-table-section {
                margin-bottom: 18px;
            }
            .table-wrapper {
                padding: 0 2px;
                border-radius: 8px;
                min-width: unset;
                max-width: 100vw;
                overflow-x: auto;
            }
            .vip-table {
                font-size: 0.98rem;
                min-width: 600px;
                border-radius: 8px;
            }
            .vip-table th, .vip-table td {
                padding: 8px 4px;
            }
            .view-agreement-btn, .styled-button {
                width: 100%;
                margin-bottom: 10px;
                font-size: 1rem;
                padding: 10px 0;
            }
            #trade-record-pagination {
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: stretch;
            }
            .section, .table-wrapper {
                padding-left: 12px !important;
                padding-right: 12px !important;
            }
            .card-title {
                padding-left: 12px !important;
                padding-right: 12px !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
        }
        @media (max-width: 480px) {
            .vip-table {
                font-size: 0.92rem;
                min-width: 480px;
            }
            .card-title, .agreement-title {
                font-size: 1.1rem;
            }
            .glass-stat-label, .glass-stat-value, .glass-stat-sub {
                font-size: 0.92rem;
            }
        }
        .trade-type-table.buy {
            background: #00ffae22;
            color: #00ffae;
            border: 1.5px solid #00ffae;
            border-radius: 12px;
            padding: 2px 14px;
            font-weight: 700;
        }
        .trade-type-table.sell {
            background: #cf132222;
            color: #cf1322;
            border: 1.5px solid #cf1322;
            border-radius: 12px;
            padding: 2px 14px;
            font-weight: 700;
        }
        .trade-profit-table.profit-positive {
            color: #00ffae;
            font-weight: 900;
        }
        .trade-profit-table.profit-negative {
            color: #cf1322;
            font-weight: 900;
        }
        .trade-profit-table.profit-neutral {
            color: #ffffff;
            font-weight: 600;
        }
        /* 移动端会员权益对比卡片样式 */
        .agreement-mobile-cards { display: none; }
        @media (max-width: 768px) {
            .agreement-table-pc { display: none !important; }
            .agreement-mobile-cards { display: block; margin-top: 12px; }
            .mobile-card-list { display: flex; flex-direction: column; gap: 16px; }
            .mobile-card {
                background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
                border-radius: 14px;
                box-shadow: 0 4px 16px #181F2A33, 0 0 0 2px #FFD70022;
                border: 1.5px solid rgba(255, 215, 0, 0.08);
                padding: 18px 16px 12px 16px;
            }
            .mobile-card-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 10px;
            }
            .mobile-card-title {
                color: #b0c4e6;
                font-size: 1.05rem;
                font-weight: 600;
            }
            .mobile-card-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 6px 0;
                border-bottom: 1px solid rgba(255,255,255,0.06);
                font-size: 1.02rem;
            }
            .mobile-card-row:last-child { border-bottom: none; }
        }
        .mobile-card {
            background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
            border-radius: 18px;
            box-shadow: 0 8px 32px #181F2A33, 0 0 0 2px #FFD70022;
            border: 1.5px solid rgba(255, 215, 0, 0.12);
            padding: 18px 16px 14px 16px;
            position: relative;
            overflow: hidden;
        }
        .mobile-card-badge-row {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 8px;
        }
        .mobile-badge {
            display: inline-block;
            font-size: 1.1rem;
            font-weight: 900;
            padding: 6px 18px;
            border-radius: 20px;
            color: #fff;
            box-shadow: 0 0 12px #FFD70055;
            letter-spacing: 1px;
        }
        .mobile-badge.vip { background: linear-gradient(90deg,#FFD700 60%,#FFB300 100%); color: #232B3E; }
        .mobile-badge.gold { background: linear-gradient(90deg,#ffe066 60%,#FFD700 100%); color: #232B3E; }
        .mobile-badge.diamond { background: linear-gradient(90deg,#b0c4e6 60%,#FFD700 100%); color: #232B3E; }
        .mobile-badge.black { background: linear-gradient(90deg,#232B3E 60%,#FFD700 100%); color: #FFD700; border:2px solid #FFD700; }
        .mobile-card-amount {
            font-size: 1.08rem;
            color: #b0c4e6;
            font-weight: 700;
            margin-bottom: 8px;
            margin-left: 2px;
        }
        .mobile-card-divider {
            height: 1.5px;
            background: linear-gradient(90deg,#FFD70022 0%,#FFD70088 50%,#FFD70022 100%);
            border: none;
            margin: 8px 0 10px 0;
        }
        .mobile-card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 0;
        }
        .mobile-card-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 1.02rem;
            color: #fff;
            font-weight: 600;
            padding: 2px 0;
        }
        .mobile-card-item .icon {
            font-size: 1.1rem;
            margin-right: 2px;
        }
        .mobile-card-item .highlight {
            color: #FFD700;
            font-weight: 900;
            margin-left: 4px;
        }
        .member-rank-mobile-list { display: none; margin-top: 10px; }
        .member-rank-mobile-card {
            background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
            border-radius: 14px;
            box-shadow: 0 4px 16px #181F2A33, 0 0 0 2px #FFD70022;
            border: 1.5px solid rgba(255, 215, 0, 0.10);
            padding: 12px 12px 8px 12px;
            margin-bottom: 12px;
        }
        .member-rank-mobile-card .rank-row {
            display: flex;
            align-items: center;
        }
        .member-rank-mobile-card .rank-row-main {
            gap: 8px;
            margin-bottom: 6px;
        }
        .member-rank-mobile-card .rank-row-bottom {
            gap: 12px;
            justify-content: flex-end;
        }
        .member-rank-mobile-card .rank-num {
            font-size: 1.18rem;
            font-weight: 900;
            color: #FFD700;
            min-width: 24px;
            text-align: center;
            flex-shrink: 0;
        }
        .member-rank-mobile-card .rank-avatar {
            width: 28px; height: 28px; border-radius: 50%; background: #232b3e; color: #FFD700; font-weight: 900; text-align: center; line-height: 28px; font-size: 1.08rem; box-shadow: 0 0 6px #FFD70033; flex-shrink: 0;
        }
        .member-rank-mobile-card .rank-name {
            color: #fff; font-weight: 700; font-size: 1.05rem; margin: 0 4px; white-space:nowrap; flex: 1 1 0%; min-width: 0; overflow: hidden; text-overflow: ellipsis;
        }
        .member-rank-mobile-card .rank-level {
            font-size: 0.98rem; font-weight: 700; border-radius: 10px; padding: 2px 14px; margin-left: 0; flex-shrink: 0;
            width: 80px; min-width: 80px; max-width: 80px; text-align: center; display: inline-block;
        }
        .member-rank-mobile-card .rank-level.vip { background: #FFD700; color: #232B3E; }
        .member-rank-mobile-card .rank-level.gold { background: #ffe066; color: #232B3E; }
        .member-rank-mobile-card .rank-level.diamond { background: #b0c4e6; color: #232B3E; }
        .member-rank-mobile-card .rank-level.black { background: #232B3E; color: #FFD700; border:1.5px solid #FFD700; }
        .member-rank-mobile-card .rank-rate {
            color: #00ffae; font-weight: 900; font-size: 1.13rem; min-width: 60px; text-align: right; flex-shrink: 0;
        }
        .member-rank-mobile-card .rank-amount {
            color: #FFD700; font-weight: 900; font-size: 1.13rem; min-width: 80px; text-align: right; flex-shrink: 0;
        }
        @media (max-width: 768px) {
            .member-rank-table-pc { display: none !important; }
            .member-rank-mobile-list { display: block; }
        }
        .trade-record-header-flex {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 12px;
        }
        .trade-record-summary {
            color: #b0c4e6;
            font-size: 1.05rem;
            margin-bottom: 0;
            margin-top: 2px;
        }
        .trade-record-toggle-btn-wrap {
            display: flex;
            justify-content: center;
            margin: 12px 0 8px 0;
        }
        .trade-toggle-btn {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 100%);
            color: #232B3E;
            border: none;
            border-radius: 22px;
            font-weight: 900;
            font-size: 1.08rem;
            padding: 8px 36px;
            box-shadow: 0 4px 16px #FFD70033;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s;
        }
        .trade-toggle-btn:hover {
            background: linear-gradient(90deg, #FFE066 0%, #FFD700 100%);
            box-shadow: 0 8px 24px #FFD70055;
            transform: translateY(-2px) scale(1.03);
        }
        .trade-record-detail {
            overflow: hidden;
            transition: max-height 0.35s cubic-bezier(.4,2,.6,1), opacity 0.25s;
            max-height: 1200px;
            opacity: 1;
        }
        .trade-record-detail-collapsed {
            max-height: 0 !important;
            opacity: 0;
            pointer-events: none;
        }
        .trade-record-detail-expanded {
            max-height: 1200px;
            opacity: 1;
            pointer-events: auto;
        }
        @media (max-width: 768px) {
            .trade-record-header-flex {
                flex-direction: column;
                align-items: flex-start;
                gap: 2px;
            }
            .trade-record-toggle-btn-wrap {
                margin: 10px 0 6px 0;
            }
            .trade-toggle-btn {
                width: 100%;
                font-size: 1.05rem;
                padding: 10px 0;
            }
        }
        /* 会员收益排名表格"排名"列左对齐 */
        .member-rank-table-pc table tr td:first-child,
        .member-rank-table-pc table tr th:first-child {
            text-align: left !important;
            padding-left: 24px !important;
        }
        .profit-amount-cell {
            font-weight: bold;
            font-size: 1.08rem;
        }
        .profit-amount-cell.positive { color: #00ffae; }
        .profit-amount-cell.negative { color: #ff4d4f; }
        .profit-amount-cell.zero { color: #ffd700; }
        .rank-row:hover {
            background: linear-gradient(90deg,#FFD70022 0%,#fffbe6 100%) !important;
            box-shadow: 0 2px 12px #FFD70033;
            transition: all 0.2s;
        }
        .ratio-badge {
          display: inline-block;
          min-width: 32px;
          padding: 2px 8px;
          background: linear-gradient(90deg, #FFD700 60%, #FFB300 100%);
          color: #232B3E;
          font-weight: 900;
          font-size: 1rem;
          border-radius: 14px;
          text-align: center;
          box-shadow: 0 2px 8px #FFD70033;
          letter-spacing: 1px;
        }
        .membership-badge {
            display: inline-block;
            padding: 3px 18px;
            border-radius: 14px;
            font-weight: 700;
            font-size: 1.05rem;
        }
        .membership-badge.gold-member {
            background: linear-gradient(90deg,#FFD700,#FFB300);
            color: #232B3E;
        }
        .membership-badge.diamond-member {
            background: linear-gradient(90deg,#b0c4e6,#fff);
            color: #232B3E;
        }
        .membership-badge.black-card-member {
            background: linear-gradient(90deg,#232B3E,#FFD700);
            color: #FFD700;
            border: 1.5px solid #FFD700;
        }
        .membership-badge.regular-member {
            background: #eee;
            color: #232B3E;
        }
        /* 移动端会员收益排名卡片样式 */
        @media (max-width: 768px) {
          .member-rank-mobile-list {
            display: block;
            margin-top: 10px;
          }
          .member-rank-mobile-card {
            background: #232e4a;
            border-radius: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 16px;
            padding: 16px 12px;
            color: #fff;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .rank-row-main {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
          }
          .rank-num {
            font-size: 1.3em;
            font-weight: bold;
            width: 28px;
            text-align: center;
          }
          .rank-avatar {
            border-radius: 50%;
            border: 2px solid #b0c4e6;
            width: 36px;
            height: 36px;
            object-fit: cover;
          }
          .rank-name {
            font-weight: 500;
            flex: 1;
            margin-left: 6px;
          }
          .rank-level {
            font-size: 0.95em;
            padding: 2px 8px;
            border-radius: 8px;
            background: #1a2236;
            margin-left: 4px;
          }
          .rank-row-bottom {
            font-size: 1.05em;
            justify-content: space-between;
            margin-top: 2px;
          }
        }
        @media (min-width: 769px) {
          .member-rank-mobile-list { display: none !important; }
        }
        @media (max-width: 768px) {
          .agreement-table-pc { display: none !important; }
          .agreement-mobile-cards { display: block !important; }
        }
        @media (min-width: 769px) {
          .agreement-mobile-cards { display: none !important; }
        }
        .mobile-card-label {
          display: inline-block;
          min-width: 140px;
          color: #FFD700;
          font-weight: 700;
          text-align: left;
        }
        .mobile-card-value {
          color: #FFD700;
          font-weight: 900;
          margin-left: 8px;
        }
        @media (max-width: 768px) {
          .agreement-table-pc { display: none !important; }
          .agreement-mobile-cards { display: block !important; }
        }
        @media (min-width: 769px) {
          .agreement-mobile-cards { display: none !important; }
        }
        .agreement-mobile-cards {
          margin-top: 24px;
        }
        .mobile-section-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #FFD700;
          margin-bottom: 12px;
          margin-top: 24px;
          letter-spacing: 1px;
          text-align: left;
          border-bottom: 2.5px solid #FFD700;
          padding-bottom: 4px;
        }
        .mobile-card-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .mobile-card {
          background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
          border-radius: 18px;
          box-shadow: 0 4px 16px #181F2A33, 0 0 0 2px #FFD70022;
          border: 1.5px solid rgba(255,215,0,0.10);
          padding: 18px 16px 14px 16px;
          position: relative;
          overflow: hidden;
        }
        .mobile-badge-row {
          margin-bottom: 10px;
          text-align: left;
        }
        .mobile-badge {
          display: inline-block;
          font-size: 1.1rem;
          font-weight: 900;
          padding: 6px 18px;
          border-radius: 20px;
          color: #232B3E;
          background: linear-gradient(90deg,#FFD700 60%,#FFB300 100%);
          box-shadow: 0 0 12px #FFD70055;
          letter-spacing: 1px;
        }
        .mobile-badge.gold { background: linear-gradient(90deg,#ffe066 60%,#FFD700 100%); color: #232B3E; }
        .mobile-badge.diamond { background: linear-gradient(90deg,#b0c4e6 60%,#FFD700 100%); color: #232B3E; }
        .mobile-badge.black { background: linear-gradient(90deg,#232B3E 60%,#FFD700 100%); color: #FFD700; border:2px solid #FFD700; }
        .mobile-info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;
        }
        .mobile-info-label {
          color: #b0c4e6;
          font-size: 1.05rem;
          font-weight: 700;
        }
        .mobile-info-value {
          color: #FFD700;
          font-size: 1.08rem;
          font-weight: 900;
          margin-left: 12px;
        }
        @media (max-width: 768px) {
          .agreement-table-pc { display: none !important; }
          .agreement-mobile-cards { display: block !important; }
        }
        @media (min-width: 769px) {
          .agreement-mobile-cards { display: none !important; }
        }
        .member-rank-table-pc th {
          font-size: 1.18rem;
          font-weight: 900;
          color: #FFD700;
          background: #232e4a;
          border-bottom: 3px solid #FFD700;
          text-align: center;
          letter-spacing: 1px;
          padding: 18px 0;
        }
        .member-rank-table-pc td {
          font-size: 1.08rem;
          font-weight: 700;
          color: #fff;
          background: #232b3e;
          text-align: center;
          padding: 12px 0;
        }
        .member-rank-table-pc .membership-badge {
          display: inline-block;
          font-size: 1.08rem;
          font-weight: 900;
          padding: 6px 18px;
          border-radius: 20px;
          margin-right: 8px;
          background: linear-gradient(90deg,#FFD700 60%,#FFB300 100%);
          color: #232B3E;
          box-shadow: 0 0 12px #FFD70055;
          letter-spacing: 1px;
        }
        .member-rank-table-pc .membership-badge.gold-member { background: linear-gradient(90deg,#ffe066 60%,#FFD700 100%); color: #232B3E; }
        .member-rank-table-pc .membership-badge.diamond-member { background: linear-gradient(90deg,#b0c4e6 60%,#FFD700 100%); color: #232B3E; }
        .member-rank-table-pc .membership-badge.supreme-black-card { background: linear-gradient(90deg,#232B3E 60%,#FFD700 100%); color: #FFD700; border:2px solid #FFD700; }
        .member-rank-table-pc .membership-badge.regular-member { background: #eee; color: #232B3E; }
        /* 表格容器样式 */
        .table-wrapper {
            overflow-x: auto;
            padding: 0 8px;
            margin: 0 auto;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            background: none;
            width: 100%;
            max-width: 100%;
        }
        /* 投资公告与策略（高级质感版） */
        .announcement-card {
          background: 
            linear-gradient(135deg, 
              rgba(15, 20, 30, 0.98) 0%, 
              rgba(22, 28, 40, 0.98) 50%, 
              rgba(28, 35, 48, 0.98) 100%
            ),
            radial-gradient(circle at top right, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
          border-radius: 18px;
          padding: 32px 28px 24px 28px;
          margin-bottom: 32px;
          position: relative;
          color: #fff;
          border: 2px solid rgba(255, 215, 0, 0.2);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.8),
            0 4px 12px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4),
            inset 2px 2px 4px rgba(255, 215, 0, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }
        .announcement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.02) 0%, 
              transparent 50%,
              rgba(0, 0, 0, 0.03) 100%
            );
          border-radius: 18px;
          pointer-events: none;
          opacity: 0.6;
        }
        .announcement-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 
            0 16px 64px rgba(255, 215, 0, 0.15),
            0 6px 20px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(255, 255, 255, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5),
            inset 2px 2px 6px rgba(255, 215, 0, 0.08);
        }
        .announcement-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        .announcement-title {
          font-size: 1.4rem;
          font-weight: 900;
          background: linear-gradient(135deg, #FFD700 0%, #FFE55C 50%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1.5px;
          flex: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: none;
          filter: none;
        }
        .priority-badge {
          font-size: 0.85rem;
          font-weight: 800;
          border-radius: 12px;
          padding: 6px 16px;
          margin-left: 16px;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
          border: 1.5px solid;
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .priority-high { 
          background: linear-gradient(135deg, rgba(255, 77, 79, 0.9) 0%, rgba(255, 179, 0, 0.9) 100%);
          color: #fff;
          border-color: rgba(255, 77, 79, 0.5);
        }
        .priority-medium { 
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.9) 0%, rgba(255, 215, 0, 0.9) 100%);
          color: #1a1a1a;
          border-color: rgba(255, 152, 0, 0.5);
        }
        .priority-low { 
          background: linear-gradient(135deg, rgba(0, 230, 160, 0.9) 0%, rgba(176, 196, 230, 0.9) 100%);
          color: #1a1a1a;
          border-color: rgba(0, 230, 160, 0.5);
        }
        .announcement-content {
          font-size: 1.05rem;
          color: rgba(200, 210, 230, 1);
          margin-bottom: 20px;
          line-height: 1.9;
          word-break: break-word;
          position: relative;
          z-index: 2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .announcement-content p,
        .announcement-content .announcement-paragraph {
          margin: 0 0 16px 0;
          padding: 0;
          line-height: 1.9;
          color: rgba(200, 210, 230, 1);
          display: block;
          word-wrap: break-word;
          word-break: break-word;
        }
        
        .announcement-content p:last-child,
        .announcement-content .announcement-paragraph:last-child {
          margin-bottom: 0;
        }
        
        /* 美化列表样式 */
        .announcement-content ul,
        .announcement-content ol {
          margin: 16px 0;
          padding-left: 28px;
          list-style-position: outside;
        }
        
        .announcement-content li {
          margin: 10px 0;
          line-height: 1.85;
          color: rgba(200, 210, 230, 1);
        }
        
        /* 确保emoji图标显示正常 */
        .announcement-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
        }
        
        /* 改善段落间距和可读性 */
        .announcement-content p + p {
          margin-top: 14px;
        }
        
        /* 确保图标和文字正确对齐 */
        .announcement-content p {
          text-align: left;
        }
        .announcement-meta {
          font-size: 0.9rem;
          color: rgba(180, 195, 220, 0.9);
          display: flex;
          gap: 24px;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          z-index: 2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .no-announcements {
          background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
          border-radius: 20px;
          box-shadow: 0 4px 24px #181F2A33, 0 0 0 2px #FFD70022;
          border: 1.5px solid rgba(255,215,0,0.10);
          padding: 40px 24px;
          margin-bottom: 28px;
          color: #b0c4e6;
          text-align: center;
        }
        .no-announcements i {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #FFD700;
          opacity: 0.7;
        }
        .vip-trade-cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          justify-content: flex-start;
        }
        .vip-trade-card {
          background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
          border-radius: 20px;
          box-shadow: 0 8px 32px #181F2A33, 0 0 0 2px #FFD70022;
          border: 1.5px solid rgba(255, 255, 255, 0.10);
          color: #fff;
          padding: 28px 22px 18px 22px;
          min-width: 320px;
          max-width: 370px;
          flex: 1 1 320px;
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .vip-trade-card:hover {
          box-shadow: 0 16px 64px 0 #FFD70044, 0 0 0 3px #FFD700;
          border-color: #FFD700;
          transform: translateY(-6px) scale(1.03);
        }
        .vip-trade-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .vip-trade-symbol {
          font-size: 1.3rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 1px;
        }
        .vip-trade-type.buy {
          background: #00ffae22;
          color: #00ffae;
          border: 1.5px solid #00ffae;
          border-radius: 10px;
          padding: 2px 14px;
          font-weight: 700;
          font-size: 1.05rem;
        }
        .vip-trade-type.sell {
          background: #cf132222;
          color: #cf1322;
          border: 1.5px solid #cf1322;
          border-radius: 10px;
          padding: 2px 14px;
          font-weight: 700;
          font-size: 1.05rem;
        }
        .vip-trade-status {
          margin-left: auto;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 2px 12px;
          border-radius: 10px;
          background: #232b3e;
          border: 1.5px solid #FFD70055;
          color: #FFD700;
        }
        .status-open { background: #232b3e; color: #FFD700; }
        .status-closed, .status-平仓 { background: #00ffae22; color: #00ffae; border-color: #00ffae; }
        .status-cancelled, .status-已取消 { background: #cf132222; color: #cf1322; border-color: #cf1322; }
        .vip-trade-card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vip-trade-info-group {
          display: flex;
          gap: 18px;
          margin-bottom: 2px;
          flex-wrap: wrap;
        }
        .vip-trade-info-group > div {
          min-width: 120px;
          font-size: 1.05rem;
        }
        .vip-trade-pnl.up, .vip-trade-roi.up { color: #00ffae; font-weight: 900; }
        .vip-trade-pnl.down, .vip-trade-roi.down { color: #cf1322; font-weight: 900; }
        @media (max-width: 900px) {
          .vip-trade-cards-grid { flex-direction: column; gap: 16px; }
          .vip-trade-card { min-width: 0; max-width: 100%; padding: 18px 8px; border-radius: 10px; }
          .vip-trade-info-group > div { min-width: 90px; font-size: 0.98rem; }
        }
        .vip-trade-cards-premium {
          display: flex;
          flex-wrap: wrap;
          gap: 36px;
          justify-content: center;
          margin-bottom: 24px;
        }
        .vip-trade-card-premium {
          background: rgba(24,31,42,0.98);
          border-radius: 28px;
          box-shadow: 0 12px 48px 0 #181F2A55, 0 2px 24px #FFD70022;
          border: 1.5px solid rgba(255,215,0,0.13);
          color: #fff;
          padding: 32px 28px 22px 28px;
          min-width: 360px;
          max-width: 420px;
          flex: 1 1 420px;
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
          transition: box-shadow 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .vip-trade-cards-premium {
            flex-wrap: wrap;
            justify-content: center;
          }
          .vip-trade-card-premium {
            flex-basis: calc(50% - 36px);
            margin-left: 0;
            margin-right: 0;
          }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-premium { flex-direction: column; gap: 18px; }
          .vip-trade-card-premium { min-width: 0; max-width: 100%; padding: 18px 8px; border-radius: 14px; }
          .vip-trade-premium-body { flex-direction: column; gap: 8px; }
        }
        .vip-trade-card-premium:before {
          content: '';
          position: absolute;
          top: -60px; left: -60px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, #FFD70033 0%, rgba(255,215,0,0) 80%);
          z-index: 0;
        }
        .vip-trade-card-premium-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 10px;
          z-index: 1;
        }
        .vip-trade-symbol-premium {
          font-size: 1.5rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px #FFD70044;
        }
        .vip-trade-type-premium.buy {
          background: #00ffae22;
          color: #00ffae;
          border: 1.5px solid #00ffae;
          border-radius: 12px;
          padding: 2px 18px;
          font-weight: 700;
          font-size: 1.08rem;
          box-shadow: 0 0 8px #00ffae33;
        }
        .vip-trade-type-premium.sell {
          background: #cf132222;
          color: #cf1322;
          border: 1.5px solid #cf1322;
          border-radius: 12px;
          padding: 2px 18px;
          font-weight: 700;
          font-size: 1.08rem;
          box-shadow: 0 0 8px #cf132233;
        }
        .vip-trade-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
          z-index: 1;
        }
        .vip-trade-status-premium {
          font-size: 1.05rem;
          font-weight: 700;
          padding: 2px 14px;
          border-radius: 10px;
          background: #232b3e;
          border: 1.5px solid #FFD70055;
          color: #FFD700;
          letter-spacing: 1px;
        }
        .status-open { background: #232b3e; color: #FFD700; }
        .status-closed, .status-平仓 { background: #00ffae22; color: #00ffae; border-color: #00ffae; }
        .status-cancelled, .status-已取消 { background: #cf132222; color: #cf1322; border-color: #cf1322; }
        .vip-trade-entrytime { color: #b0c4e6; font-size: 1.01rem; display: flex; align-items: center; gap: 4px; }
        .vip-trade-premium-body {
          display: flex;
          flex-direction: row;
          gap: 32px;
          margin-bottom: 18px;
          z-index: 1;
        }
        .vip-trade-premium-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .vip-label {
          color: #b0c4e6;
          font-size: 0.98rem;
          margin-right: 8px;
          font-weight: 600;
        }
        .vip-value {
          color: #fff;
          font-size: 1.08rem;
          font-weight: 700;
        }
        .vip-trade-premium-footer {
          display: flex;
          flex-direction: row;
          gap: 32px;
          align-items: center;
          margin-top: 8px;
          z-index: 1;
        }
        .vip-pnl-group, .vip-roi-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        .vip-pnl-label, .vip-roi-label {
          color: #b0c4e6;
          font-size: 0.98rem;
          font-weight: 600;
        }
        .vip-pnl-value.up, .vip-roi-value.up {
          color: #00ffae;
          font-weight: 900;
          font-size: 1.25rem;
          text-shadow: 0 0 8px #00ffae55;
        }
        .vip-pnl-value.down, .vip-roi-value.down {
          color: #cf1322;
          font-weight: 900;
          font-size: 1.25rem;
          text-shadow: 0 0 8px #cf132255;
        }
        .vip-trade-cards-wide {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          margin-bottom: 32px;
          justify-content: space-between;
        }
        .vip-trade-card-wide {
          background: linear-gradient(135deg, #232B3E 60%, #232e4a 100%);
          border-radius: 28px;
          box-shadow: 0 8px 32px #181F2A44, 0 0 0 2px #FFD70033;
          border: 2px solid rgba(255,215,0,0.10);
          color: #fff;
          padding: 38px 48px 28px 48px;
          flex: 1 1 calc(50% - 16px);
          min-width: 0;
          max-width: calc(50% - 16px);
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          transition: box-shadow 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .vip-trade-card-wide:not(:last-child) {
          margin-right: 0;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-wide { padding: 18px 8px; }
          .vip-trade-cards-wide { gap: 18px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-wide { flex-direction: column; gap: 18px; }
          .vip-trade-card-wide { max-width: 100%; flex-basis: 100%; border-radius: 16px; padding: 12px 2vw; }
        }
        .vip-trade-cards-lux {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          margin-bottom: 32px;
          justify-content: space-between;
        }
        .vip-trade-card-lux {
          background: linear-gradient(90deg, rgba(35,43,62,0.92) 60%, rgba(35,46,74,0.92) 100%);
          border-radius: 36px;
          box-shadow: 0 4px 32px 0 #FFD70033, 0 0 0 2px #FFD70022;
          border: 1.5px solid rgba(255,215,0,0.10);
          color: #fff;
          padding: 0 38px;
          min-height: 120px;
          max-height: 140px;
          height: 120px;
          flex: 1 1 calc(50% - 14px);
          min-width: 0;
          max-width: calc(50% - 14px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
          backdrop-filter: blur(6px) saturate(1.2);
        }
        .vip-trade-card-lux:before {
          content: '';
          position: absolute;
          left: -60px; top: -60px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, #FFD70033 0%, rgba(255,215,0,0) 80%);
          z-index: 0;
        }
        .vip-trade-card-lux:hover {
          box-shadow: 0 8px 48px 0 #FFD70055, 0 0 0 3px #FFD700;
          border-color: #FFD700;
          transform: translateY(-3px) scale(1.01);
        }
        .vip-trade-lux-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
          min-width: 180px;
          z-index: 1;
        }
        .vip-symbol-lux {
          font-size: 2.1rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px #FFD70044;
          margin-bottom: 2px;
        }
        .vip-type-lux {
          display: inline-block;
          margin-right: 12px;
          font-size: 1.08rem;
          font-weight: 700;
          padding: 2px 18px;
          border-radius: 12px;
          border: 1.5px solid #00ffae;
          color: #00ffae;
          background: #00ffae22;
          box-shadow: 0 0 8px #00ffae33;
        }
        .vip-type-lux.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #cf132222;
          box-shadow: 0 0 8px #cf132233;
        }
        .vip-status-lux {
          display: inline-block;
          font-size: 1.08rem;
          font-weight: 700;
          padding: 2px 14px;
          border-radius: 10px;
          background: #232b3e;
          border: 1.5px solid #FFD70055;
          color: #FFD700;
          margin-left: 8px;
        }
        .vip-trade-lux-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
          align-items: flex-end;
          z-index: 1;
        }
        .vip-lux-row {
          display: flex;
          flex-direction: row;
          gap: 38px;
          align-items: center;
        }
        .vip-label-lux {
          color: #b0c4e6;
          font-size: 1.02rem;
          font-weight: 600;
          margin-right: 4px;
        }
        .vip-value-lux {
          color: #fff;
          font-size: 1.18rem;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 12px;
        }
        .vip-pnl-lux, .vip-roi-lux {
          font-size: 1.7rem;
          font-weight: 900;
          margin-left: 12px;
          text-shadow: 0 0 8px #00ffae55;
        }
        .vip-pnl-lux.up, .vip-roi-lux.up { color: #00ffae; }
        .vip-pnl-lux.down, .vip-roi-lux.down { color: #cf1322; text-shadow: 0 0 8px #cf132255; }
        .vip-lux-meta {
          color: #b0c4e6;
          font-size: 1.01rem;
          font-weight: 500;
          margin-top: 2px;
          text-align: right;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-lux { padding: 0 8px; }
          .vip-trade-cards-lux { gap: 14px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-lux { flex-direction: column; gap: 14px; }
          .vip-trade-card-lux { max-width: 100%; flex-basis: 100%; border-radius: 18px; height: auto; min-height: 90px; }
          .vip-trade-lux-right { align-items: flex-start; }
        }
        .vip-trade-cards-prolux {
          display: flex;
          flex-wrap: wrap;
          gap: 36px;
          margin-bottom: 40px;
          justify-content: space-between;
        }
        .vip-trade-card-prolux {
          background: linear-gradient(120deg, rgba(35,43,62,0.92) 70%, rgba(35,46,74,0.96) 100%);
          border-radius: 0;
          box-shadow: 0 0 48px 0 #FFD70033, 0 0 0 2px #FFD70022;
          border: 2px solid rgba(255,215,0,0.18);
          color: #fff;
          padding: 0;
          min-height: 200px;
          max-height: 240px;
          flex: 1 1 calc(50% - 18px);
          min-width: 0;
          max-width: calc(50% - 18px);
          display: flex;
          align-items: stretch;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
          backdrop-filter: blur(10px) saturate(1.18);
          animation: card-glow-breath 2.8s infinite alternate;
        }
        @keyframes card-glow-breath {
          0% { box-shadow: 0 0 48px 0 #FFD70033, 0 0 0 2px #FFD70022; }
          100% { box-shadow: 0 0 80px 12px #FFD70077, 0 0 0 4px #FFD70044; }
        }
        .vip-trade-card-prolux:before { display: none; }
        .vip-trade-card-prolux:hover {
          box-shadow: 0 0 120px 24px #FFD70099, 0 0 0 4px #FFD700;
          border-color: #FFD700;
          transform: translateY(-4px) scale(1.01);
        }
        .vip-prolux-left {
          flex: 0 0 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #232B3E 60%, #FFD70022 100%);
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          position: relative;
          z-index: 1;
          min-width: 160px;
          max-width: 200px;
          padding: 0 24px;
        }
        .vip-prolux-symbol {
          font-size: 2.6rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 2px;
          text-shadow: 0 2px 16px #FFD70077;
          margin-bottom: 12px;
          margin-top: 8px;
        }
        .vip-prolux-tags {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
        .vip-prolux-type {
          font-size: 1.15rem;
          font-weight: 700;
          padding: 4px 28px;
          border-radius: 16px;
          border: 2px solid #00ffae;
          color: #00ffae;
          background: #00ffae22;
          box-shadow: 0 0 12px #00ffae33;
          margin-bottom: 2px;
        }
        .vip-prolux-type.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #cf132222;
          box-shadow: 0 0 12px #cf132233;
        }
        .vip-prolux-status {
          font-size: 1.08rem;
          font-weight: 700;
          padding: 2px 18px;
          border-radius: 12px;
          background: #232b3e;
          border: 2px solid #FFD70055;
          color: #FFD700;
          margin-top: 2px;
        }
        .vip-prolux-glowdot { display: none; }
        .vip-prolux-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          padding: 28px 36px 28px 24px;
          z-index: 1;
          min-width: 0;
          overflow-x: auto;
        }
        .vip-prolux-row {
          display: flex;
          flex-direction: row;
          gap: 44px;
          align-items: center;
          margin-bottom: 2px;
          flex-wrap: wrap;
        }
        .vip-prolux-label {
          color: #b0c4e6;
          font-size: 1.08rem;
          font-weight: 600;
          margin-right: 4px;
        }
        .vip-prolux-value {
          color: #fff;
          font-size: 1.22rem;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 12px;
          word-break: break-all;
        }
        .vip-prolux-pnl, .vip-prolux-roi {
          font-size: 2.1rem;
          font-weight: 900;
          margin-left: 12px;
          text-shadow: 0 0 16px #00ffae55;
        }
        .vip-prolux-pnl.up, .vip-prolux-roi.up { color: #00ffae; }
        .vip-prolux-pnl.down, .vip-prolux-roi.down { color: #cf1322; text-shadow: 0 0 16px #cf132255; }
        .vip-prolux-meta {
          color: #b0c4e6;
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 6px;
          text-align: right;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-prolux { padding: 0; }
          .vip-trade-cards-prolux { gap: 14px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-prolux { flex-direction: column; gap: 14px; }
          .vip-trade-card-prolux { max-width: 100%; flex-basis: 100%; border-radius: 0; height: auto; min-height: 120px; }
          .vip-prolux-left { min-width: 100px; max-width: 120px; padding: 0 8px; }
          .vip-prolux-right { padding: 18px 8px 18px 8px; }
        }
        .vip-trade-cards-ultimate {
          display: flex;
          flex-wrap: wrap;
          gap: 36px;
          margin-bottom: 40px;
          justify-content: space-between;
        }
        .vip-trade-card-ultimate {
          background: linear-gradient(120deg, rgba(35,43,62,0.98) 70%, rgba(35,46,74,0.96) 100%);
          border-radius: 0;
          box-shadow: 0 0 64px 0 #FFD70044, 0 0 0 2px #FFD70022;
          border: 2px solid rgba(255,215,0,0.18);
          color: #fff;
          padding: 0;
          min-height: 180px;
          max-height: 220px;
          flex: 1 1 calc(50% - 18px);
          min-width: 0;
          max-width: calc(50% - 18px);
          display: flex;
          align-items: stretch;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
          backdrop-filter: blur(10px) saturate(1.18);
          animation: card-glow-breath 2.8s infinite alternate;
        }
        @keyframes card-glow-breath {
          0% { box-shadow: 0 0 64px 0 #FFD70044, 0 0 0 2px #FFD70022; }
          100% { box-shadow: 0 0 120px 24px #FFD70099, 0 0 0 4px #FFD70044; }
        }
        .vip-trade-card-ultimate:hover {
          box-shadow: 0 0 120px 32px #FFD700cc, 0 0 0 4px #FFD700;
          border-color: #FFD700;
          transform: translateY(-4px) scale(1.01);
        }
        .vip-ultimate-left {
          flex: 0 0 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          background: linear-gradient(135deg, #232B3E 60%, #FFD70022 100%);
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          position: relative;
          z-index: 1;
          min-width: 160px;
          max-width: 220px;
          padding: 0 32px;
          gap: 18px;
        }
        .vip-ultimate-symbol {
          font-size: 2.7rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 2px;
          text-shadow: 0 2px 18px #FFD70099;
          margin-bottom: 8px;
          margin-top: 8px;
        }
        .vip-ultimate-tags {
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
        }
        .vip-ultimate-type {
          font-size: 1.18rem;
          font-weight: 700;
          padding: 4px 28px;
          border-radius: 16px;
          border: 2px solid #00ffae;
          color: #00ffae;
          background: #00ffae22;
          box-shadow: 0 0 12px #00ffae33;
        }
        .vip-ultimate-type.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #cf132222;
          box-shadow: 0 0 12px #cf132233;
        }
        .vip-ultimate-status {
          font-size: 1.12rem;
          font-weight: 700;
          padding: 2px 18px;
          border-radius: 12px;
          background: #232b3e;
          border: 2px solid #FFD70055;
          color: #FFD700;
        }
        .vip-ultimate-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          padding: 32px 36px 32px 24px;
          z-index: 1;
          min-width: 0;
        }
        .vip-ultimate-row {
          display: flex;
          flex-direction: row;
          gap: 44px;
          align-items: center;
          margin-bottom: 2px;
          flex-wrap: wrap;
        }
        .vip-ultimate-label {
          color: #b0c4e6;
          font-size: 1.08rem;
          font-weight: 600;
          margin-right: 4px;
        }
        .vip-ultimate-value {
          color: #fff;
          font-size: 1.22rem;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 12px;
          word-break: break-all;
        }
        .vip-ultimate-pnl, .vip-ultimate-roi {
          font-size: 2.1rem;
          font-weight: 900;
          margin-left: 12px;
          text-shadow: 0 0 16px #00ffae55;
        }
        .vip-ultimate-pnl.up, .vip-ultimate-roi.up { color: #00ffae; }
        .vip-ultimate-pnl.down, .vip-ultimate-roi.down { color: #cf1322; text-shadow: 0 0 16px #cf132255; }
        .vip-ultimate-meta {
          color: #b0c4e6;
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 6px;
          text-align: right;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-ultimate { padding: 0; }
          .vip-trade-cards-ultimate { gap: 14px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-ultimate { flex-direction: column; gap: 14px; }
          .vip-trade-card-ultimate { max-width: 100%; flex-basis: 100%; border-radius: 0; height: auto; min-height: 120px; }
          .vip-ultimate-left { min-width: 100px; max-width: 120px; padding: 0 8px; }
          .vip-ultimate-right { padding: 18px 8px 18px 8px; }
        }
        .vip-trade-card-ultimate {
          max-height: 220px;
          height: 200px;
          overflow: visible;
          display: flex;
        }
        .vip-ultimate-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-width: 140px;
          max-width: 180px;
          padding: 0 18px;
        }
        .vip-ultimate-symbol {
          font-size: 2.5rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 2px;
          text-shadow: 0 2px 18px #FFD70099;
          margin: 0 0 8px 0;
        }
        .vip-ultimate-tags {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          align-items: center;
        }
        .vip-ultimate-type, .vip-ultimate-status {
          width: 80px;
          min-height: 32px;
          line-height: 32px;
          text-align: center;
          display: block;
          font-size: 1.08rem;
        }
        .vip-ultimate-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          padding: 22px 18px 22px 8px;
          min-width: 0;
          height: 100%;
        }
        .vip-ultimate-meta {
          color: #b0c4e6;
          font-size: 1.02rem;
          font-weight: 500;
          margin-bottom: 0;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .vip-ultimate-row {
          display: flex;
          flex-direction: row;
          gap: 18px;
          align-items: center;
          margin-bottom: 0;
          width: 100%;
          justify-content: flex-start;
        }
        .vip-ultimate-label {
          color: #b0c4e6;
          font-size: 1.02rem;
          font-weight: 600;
          min-width: 44px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .vip-ultimate-value, .vip-ultimate-pnl, .vip-ultimate-roi {
          color: #fff;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 10px;
          min-width: 0;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: clamp(1rem, 2vw, 1.18rem);
        }
        .vip-ultimate-pnl, .vip-ultimate-roi {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        }
        .vip-ultimate-pnl.up, .vip-ultimate-roi.up { color: #00ffae; }
        .vip-ultimate-pnl.down, .vip-ultimate-roi.down { color: #cf1322; text-shadow: 0 0 16px #cf132255; }
        @media (max-width: 900px) {
          .vip-trade-card-ultimate { height: auto; min-height: 120px; }
          .vip-ultimate-left { padding: 0 6px; }
          .vip-ultimate-right { padding: 10px 4px 10px 4px; }
          .vip-ultimate-row { gap: 8px; }
        }
        .vip-trade-cards-ultimate {
          overflow: visible !important;
        }
        .vip-trade-card-ultimate {
          max-height: none;
          height: 200px;
          overflow: visible !important;
          display: flex;
        }
        .vip-ultimate-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          padding: 22px 18px 22px 8px;
          min-width: 0;
          height: 100%;
        }
        .vip-ultimate-row {
          display: flex;
          flex-direction: row;
          gap: 18px;
          align-items: center;
          margin-bottom: 0;
          width: 100%;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .vip-ultimate-label {
          color: #b0c4e6;
          font-size: 1.02rem;
          font-weight: 600;
          min-width: 44px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .vip-ultimate-value, .vip-ultimate-pnl, .vip-ultimate-roi {
          color: #fff;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 10px;
          min-width: 0;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: clamp(1rem, 2vw, 1.18rem);
        }
        .vip-ultimate-pnl, .vip-ultimate-roi {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        }
        @media (max-width: 900px) {
          .vip-trade-card-ultimate { height: auto; min-height: 120px; }
          .vip-ultimate-left { padding: 0 6px; }
          .vip-ultimate-right { padding: 10px 4px 10px 4px; }
          .vip-ultimate-row { gap: 8px; }
        }
        .vip-trade-cards-finance {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          margin-bottom: 40px;
          justify-content: space-between;
        }
        .vip-trade-card-finance {
          background: linear-gradient(120deg, rgba(30,34,48,0.98) 70%, rgba(35,38,58,0.96) 100%);
          border-radius: 0;
          box-shadow: 0 0 32px 0 #FFD70044, 0 0 0 2px #FFD70044;
          border: 2px solid #FFD70055;
          color: #fff;
          min-height: 180px;
          max-height: 220px;
          flex: 1 1 calc(50% - 16px);
          min-width: 0;
          max-width: calc(50% - 16px);
          display: flex;
          align-items: stretch;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
          backdrop-filter: blur(10px) saturate(1.12);
        }
        .vip-trade-card-finance:hover {
          box-shadow: 0 0 64px 8px #FFD700cc, 0 0 0 4px #FFD700;
          border-color: #FFD700;
          transform: translateY(-2px) scale(1.01);
        }
        .vip-finance-left {
          flex: 0 0 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #232B3E 60%, #FFD70022 100%);
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          min-width: 120px;
          max-width: 180px;
          padding: 0 18px;
          gap: 18px;
        }
        .vip-finance-symbol {
          font-size: 2.5rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 2px;
          text-shadow: 0 2px 18px #FFD70099;
          margin-bottom: 8px;
          margin-top: 8px;
        }
        .vip-finance-tags {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
        .vip-finance-type {
          font-size: 1.08rem;
          font-weight: 700;
          padding: 4px 24px;
          border-radius: 16px;
          border: 2px solid #00ffae;
          color: #00ffae;
          background: #00ffae22;
          box-shadow: 0 0 8px #00ffae33;
        }
        .vip-finance-type.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #cf132222;
          box-shadow: 0 0 8px #cf132233;
        }
        .vip-finance-status {
          font-size: 1.02rem;
          font-weight: 700;
          padding: 2px 16px;
          border-radius: 12px;
          background: #232b3e;
          border: 2px solid #FFD70055;
          color: #FFD700;
        }
        .vip-finance-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          padding: 24px 32px 24px 18px;
          min-width: 0;
        }
        .vip-finance-row {
          display: flex;
          flex-direction: row;
          gap: 36px;
          align-items: center;
          margin-bottom: 2px;
          flex-wrap: wrap;
        }
        .vip-finance-label {
          color: #b0c4e6;
          font-size: 1.02rem;
          font-weight: 600;
          min-width: 48px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .vip-finance-value {
          color: #fff;
          font-size: 1.12rem;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 12px;
          word-break: break-all;
        }
        .vip-finance-pnl, .vip-finance-roi {
          font-size: 1.7rem;
          font-weight: 900;
          margin-left: 12px;
          text-shadow: 0 0 12px #00ffae55;
        }
        .vip-finance-pnl.up, .vip-finance-roi.up { color: #00ffae; }
        .vip-finance-pnl.down, .vip-finance-roi.down { color: #cf1322; text-shadow: 0 0 12px #cf132255; }
        .vip-finance-meta {
          color: #b0c4e6;
          font-size: 1.01rem;
          font-weight: 500;
          margin-bottom: 6px;
          text-align: right;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-finance { padding: 0; }
          .vip-trade-cards-finance { gap: 12px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-finance { flex-direction: column; gap: 12px; }
          .vip-trade-card-finance { max-width: 100%; flex-basis: 100%; border-radius: 0; height: auto; min-height: 120px; }
          .vip-finance-left { min-width: 80px; max-width: 100px; padding: 0 6px; }
          .vip-finance-right { padding: 12px 6px 12px 6px; }
          .vip-finance-row { gap: 10px; }
        }
        .vip-trade-cards-luxury {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 48px;
          justify-content: flex-start;
        }
        .vip-trade-card-luxury {
          background: rgba(28,32,48,0.82);
          border-radius: 28px;
          box-shadow: 0 8px 48px 0 #0e0e1a99, 0 0 0 2.5px #ffd70055;
          border: 2.5px solid;
          border-image: linear-gradient(120deg, #ffd700 10%, #00ffe7 90%) 1;
          color: #fff;
          min-height: 240px;
          max-width: 420px;
          flex: 1 1 380px;
          display: flex;
          align-items: stretch;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s, border-image 0.5s;
          backdrop-filter: blur(18px) saturate(1.18);
          margin-bottom: 0;
        }
        .vip-trade-card-luxury:hover {
          box-shadow: 0 16px 64px 0 #ffd70066, 0 0 0 4px #ffd700cc;
          border-image: linear-gradient(90deg, #ffd700 10%, #00ffe7 90%) 1;
          transform: translateY(-6px) scale(1.025);
        }
        .vip-luxury-left {
          flex: 0 0 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #232B3E 60%, #ffd70022 100%);
          border-top-left-radius: 28px;
          border-bottom-left-radius: 28px;
          min-width: 100px;
          max-width: 140px;
          padding: 0 18px;
          gap: 18px;
        }
        .vip-luxury-symbol {
          font-size: 2.7rem;
          font-weight: 900;
          color: #ffd700;
          letter-spacing: 2px;
          text-shadow: 0 2px 18px #ffd70099;
          margin-bottom: 8px;
          margin-top: 8px;
        }
        .vip-luxury-tags {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
        .vip-luxury-type {
          font-size: 1.08rem;
          font-weight: 700;
          padding: 4px 24px;
          border-radius: 16px;
          border: 2px solid #00ffe7;
          color: #00ffe7;
          background: #00ffe722;
          box-shadow: 0 0 8px #00ffe733;
        }
        .vip-luxury-type.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #cf132222;
          box-shadow: 0 0 8px #cf132233;
        }
        .vip-luxury-status {
          font-size: 1.02rem;
          font-weight: 700;
          padding: 2px 16px;
          border-radius: 12px;
          background: #232b3e;
          border: 2px solid #ffd70055;
          color: #ffd700;
        }
        .vip-luxury-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          padding: 32px 36px 32px 24px;
          min-width: 0;
        }
        .vip-luxury-row {
          display: flex;
          flex-direction: row;
          gap: 36px;
          align-items: center;
          margin-bottom: 2px;
          flex-wrap: wrap;
        }
        .vip-luxury-pnl {
          font-size: 2.2rem;
          font-weight: 900;
          background: linear-gradient(90deg, #00ffe7 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          margin-right: 18px;
        }
        .vip-luxury-pnl.down {
          background: linear-gradient(90deg, #cf1322 0%, #ffd700 100%);
        }
        .vip-luxury-roi {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(90deg, #ffd700 0%, #00ffe7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .vip-luxury-meta {
          color: #b0c4e6;
          font-size: 1.01rem;
          font-weight: 500;
          margin-bottom: 6px;
          text-align: right;
        }
        .vip-luxury-label {
          color: #b0c4e6;
          font-size: 1.02rem;
          font-weight: 600;
          min-width: 48px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .vip-luxury-value {
          color: #fff;
          font-size: 1.12rem;
          font-weight: 900;
          letter-spacing: 1px;
          margin-right: 12px;
          word-break: break-all;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-luxury { max-width: 48%; flex-basis: 48%; }
          .vip-trade-cards-luxury { gap: 18px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-luxury { flex-direction: column; gap: 12px; }
          .vip-trade-card-luxury { max-width: 100%; flex-basis: 100%; border-radius: 18px; min-height: 120px; }
          .vip-luxury-left { min-width: 70px; max-width: 90px; padding: 0 6px; }
          .vip-luxury-right { padding: 12px 6px 12px 6px; }
          .vip-luxury-row { gap: 10px; }
        }
        .vip-trade-cards-global {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          margin-bottom: 40px;
          justify-content: flex-start;
        }
        .vip-trade-card-global {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 32px 0 #e6e6e6, 0 0 0 1.5px #f0f0f0;
          color: #222;
          min-height: 220px;
          max-width: calc(33% - 22px);
          flex: 1 1 calc(33% - 22px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 32px 28px 18px 28px;
          position: relative;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .vip-trade-card-global:hover {
          box-shadow: 0 12px 48px 0 #b7e3ff44, 0 0 0 2px #1890ff33;
          transform: translateY(-2px) scale(1.01);
        }
        .vip-global-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }
        .vip-global-symbol {
          font-size: 2.1rem;
          font-weight: 900;
          color: #222;
          letter-spacing: 2px;
        }
        .vip-global-type {
          font-size: 1.01rem;
          font-weight: 700;
          padding: 2px 14px;
          border-radius: 10px;
          border: 1.5px solid #1890ff;
          color: #1890ff;
          background: #e6f7ff;
        }
        .vip-global-type.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #fff1f0;
        }
        .vip-global-status {
          font-size: 0.98rem;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 8px;
          background: #f6f6f6;
          border: 1.5px solid #e6e6e6;
          color: #bfa700;
        }
        .vip-global-main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 18px;
          width: 100%;
        }
        .vip-global-pnl {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 6px;
          color: #52c41a;
        }
        .vip-global-pnl.down { color: #cf1322; }
        .vip-global-roi {
          font-size: 1.2rem;
          font-weight: 800;
          color: #1890ff;
          margin-bottom: 8px;
        }
        .vip-global-meta {
          color: #888;
          font-size: 0.98rem;
          font-weight: 400;
          margin-top: 10px;
          text-align: left;
          width: 100%;
        }
        .vip-global-row {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: center;
          margin-bottom: 2px;
          width: 100%;
        }
        .vip-global-label {
          color: #888;
          font-size: 1.01rem;
          font-weight: 500;
          min-width: 48px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .vip-global-value {
          color: #222;
          font-size: 1.08rem;
          font-weight: 700;
          margin-right: 12px;
          word-break: break-all;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-global { max-width: calc(50% - 18px); flex-basis: calc(50% - 18px); }
          .vip-trade-cards-global { gap: 18px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-global { flex-direction: column; gap: 12px; }
          .vip-trade-card-global { max-width: 100%; flex-basis: 100%; border-radius: 12px; min-height: 120px; }
        }
        .vip-trade-cards-blackgold {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          width: 100%;
          margin: 0;
          padding: 0;
          justify-content: flex-start;
          box-sizing: border-box;
        }
        .vip-trade-cards-blackgold.single-card {
          justify-content: center;
        }
        .vip-trade-cards-blackgold.single-card .vip-trade-card-blackgold {
          max-width: 700px;
          flex-basis: 700px;
          width: 100%;
        }
        .vip-trade-card-blackgold {
          max-width: calc(50% - 14px);
          flex: 1 1 calc(50% - 14px);
          min-width: 0;
          background: linear-gradient(120deg, #181818 80%, #232323 100%);
          border-radius: 18px;
          box-shadow: 0 8px 32px 0 #000a, 0 0 0 2px #FFD70055;
          border: 2.5px solid #FFD70088;
          color: #fff;
          min-height: 220px;
          max-width: none;
          flex: 1 1 0;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
          font-family: 'DIN Alternate', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
        }
        .vip-trade-card-blackgold:hover {
          box-shadow: 0 12px 48px 0 #FFD70044, 0 0 0 4px #FFD700cc;
          border-color: #FFD700;
          transform: translateY(-2px) scale(1.01);
        }
        .vip-blackgold-left {
          flex: 0 0 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #232323 60%, #FFD70022 100%);
          border-top-left-radius: 18px;
          border-bottom-left-radius: 18px;
          min-width: 100px;
          max-width: 140px;
          padding: 24px 18px;
          gap: 18px;
        }
        .vip-blackgold-symbol {
          font-size: 2.2rem;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }
        .vip-blackgold-tags {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
        }
        .vip-blackgold-type {
          font-size: 1.01rem;
          font-weight: 700;
          padding: 2px 14px;
          border-radius: 10px;
          border: 1.5px solid #FFD700;
          color: #FFD700;
          background: #232323;
        }
        .vip-blackgold-type.sell {
          border-color: #cf1322;
          color: #cf1322;
          background: #232323;
        }
        .vip-blackgold-status {
          font-size: 0.98rem;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 8px;
          background: #232323;
          border: 1.5px solid #FFD70055;
          color: #FFD700;
        }
        .vip-blackgold-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          padding: 32px 36px 32px 24px;
          min-width: 0;
        }
        .vip-blackgold-main {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 10px;
        }
        .vip-blackgold-pnl {
          font-size: 1.5rem;
          font-weight: 900;
          margin-right: 0;
          color: #cf1322;
        }
        .vip-blackgold-pnl.up {
          color: #00c97b;
        }
        .vip-blackgold-pnl.down {
          color: #cf1322;
        }
        .vip-blackgold-roi {
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFD700;
        }
        .vip-blackgold-roi-value.up {
          color: #00c97b;
          font-weight: 900;
        }
        .vip-blackgold-roi-value.down {
          color: #cf1322;
          font-weight: 900;
        }
        .vip-blackgold-roi.up {
          color: #00c97b;
        }
        .vip-blackgold-roi.down {
          color: #cf1322;
        }
        .vip-blackgold-row {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: center;
          margin-bottom: 2px;
          width: 100%;
        }
        .vip-blackgold-label {
          color: #b0b0b0;
          font-size: 1.01rem;
          font-weight: 500;
          min-width: 48px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .vip-blackgold-value {
          color: #fff;
          font-size: 1.08rem;
          font-weight: 700;
          margin-right: 12px;
          word-break: break-all;
        }
        .vip-blackgold-meta {
          color: #888;
          font-size: 0.98rem;
          font-weight: 400;
          margin-top: 10px;
          text-align: left;
          width: 100%;
        }
        @media (max-width: 1200px) {
          .vip-trade-card-blackgold { max-width: 100%; flex-basis: 100%; }
          .vip-trade-cards-blackgold { gap: 18px; }
        }
        @media (max-width: 900px) {
          .vip-trade-cards-blackgold { flex-direction: column; gap: 12px; }
          .vip-trade-card-blackgold { max-width: 100%; flex-basis: 100%; border-radius: 12px; min-height: 120px; }
          .vip-blackgold-left { min-width: 70px; max-width: 90px; padding: 18px 6px; }
          .vip-blackgold-right { padding: 12px 6px 12px 6px; }
          .vip-blackgold-main { gap: 12px; }
        }
        .vip-blackgold-main-row1 {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 24px;
          justify-content: center;
          width: 100%;
          margin-bottom: 2px;
        }
        .vip-blackgold-pnl {
          font-size: 1.5rem;
          font-weight: 900;
          margin-right: 0;
        }
        .vip-blackgold-roi {
          font-size: 1.1rem;
          font-weight: 800;
        }
        .vip-blackgold-main-row2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          margin-bottom: 2px;
        }
        .vip-blackgold-entry-time {
          color: #b0b0b0;
          font-size: 0.98rem;
          font-weight: 400;
          margin-top: -2px;
          margin-bottom: 2px;
          text-align: center;
          width: 100%;
        }
        .vip-blackgold-main-row3, .vip-blackgold-main-row4 {
          display: flex;
          flex-direction: row;
          gap: 18px;
          justify-content: center;
          width: 100%;
          margin-bottom: 2px;
        }
        .vip-blackgold-field {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 70px;
          max-width: 120px;
        }
        .vip-blackgold-label {
          color: #888;
          font-size: 0.95rem;
          font-weight: 400;
          margin-bottom: 1px;
        }
        .vip-blackgold-value {
          color: #fff;
          font-size: 1.02rem;
          font-weight: 700;
          word-break: break-all;
          text-align: center;
        }
        @media (max-width: 600px) {
          .vip-trade-card-blackgold {
            flex-direction: column !important;
            min-width: 0 !important;
            max-width: 100% !important;
            padding: 14px 8px !important;
            border-radius: 12px !important;
            margin-bottom: 16px;
          }
          .vip-blackgold-symbol-row, .vip-blackgold-pnl-row, .vip-blackgold-meta-row, .vip-blackgold-btn-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            gap: 8px;
          }
          .vip-blackgold-symbol {
            font-size: 1.2rem;
            font-weight: 900;
            color: #FFD700;
          }
          .vip-blackgold-pnl, .vip-blackgold-roi {
            font-size: 1.1rem;
            font-weight: 700;
          }
          .vip-blackgold-meta-row span {
            font-size: 0.98rem;
            color: #b0c4e6;
          }
          .vip-blackgold-btn-row button {
            flex: 1 1 48%;
            margin: 0 2px;
            font-size: 1rem;
            padding: 8px 0;
            border-radius: 8px;
          }
        }
        @media (max-width: 600px) {
          .vip-trade-cards-blackgold { display: block !important; }
          .vip-trade-card-blackgold { display: none !important; }
          .vip-mobile-card {
            width: 100vw;
            margin: 0;
            padding: 18px 0 12px 0;
            background: #232B3E;
            border-bottom: 1.5px solid #222a3a;
            box-sizing: border-box;
          }
          .vip-mobile-header {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.15rem;
            font-weight: 900;
            color: #FFD700;
            margin-bottom: 8px;
            padding: 0 16px;
          }
          .vip-mobile-main {
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
            margin-bottom: 6px;
          }
          .vip-mobile-pnl, .vip-mobile-roi {
            font-size: 1.18rem;
            font-weight: 900;
          }
          .vip-mobile-pnl.up span, .vip-mobile-roi.up span { color: #00ffae; }
          .vip-mobile-pnl.down span, .vip-mobile-roi.down span { color: #cf1322; }
          .vip-mobile-meta {
            font-size: 0.98rem;
            color: #b0c4e6;
            padding: 0 16px;
            margin-bottom: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px 16px;
          }
          .vip-mobile-btns {
            display: flex;
            gap: 8px;
            padding: 0 16px;
          }
          .vip-mobile-btns button {
            flex: 1 1 0;
            font-size: 1.08rem;
            padding: 10px 0;
            border-radius: 8px;
            font-weight: 700;
          }
        }
     
        /* 移动端表格样式（高级质感版） */
        .trade-card-list {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .trade-card {
          background: 
            linear-gradient(135deg, 
              rgba(15, 20, 30, 0.98) 0%, 
              rgba(22, 28, 40, 0.98) 50%, 
              rgba(28, 35, 48, 0.98) 100%
            ),
            radial-gradient(circle at top left, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
          border-radius: 18px;
          padding: 20px 18px 16px 18px;
          color: #fff;
          font-size: 1.05rem;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 2px solid rgba(255, 215, 0, 0.15);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.7),
            0 4px 12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        .trade-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.02) 0%, 
              transparent 50%,
              rgba(0, 0, 0, 0.03) 100%
            );
          border-radius: 18px;
          pointer-events: none;
          opacity: 0.6;
        }
        .trade-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 
            0 12px 48px rgba(255, 215, 0, 0.12),
            0 6px 20px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(255, 255, 255, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4);
        }
        .trade-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }
        .trade-symbol {
          font-weight: 800;
          font-size: 1.1rem;
          background: linear-gradient(135deg, #FFD700 0%, #FFE55C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          letter-spacing: 0.5px;
        }
        .trade-type {
          padding: 4px 12px;
          border-radius: 10px;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          border: 1.5px solid;
          box-shadow: 
            0 2px 6px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .trade-type.buy {
          background: linear-gradient(135deg, rgba(0, 230, 160, 0.2) 0%, rgba(0, 230, 160, 0.1) 100%);
          color: #00E6A0;
          border-color: rgba(0, 230, 160, 0.4);
        }
        .trade-type.sell {
          background: linear-gradient(135deg, rgba(207, 19, 34, 0.2) 0%, rgba(207, 19, 34, 0.1) 100%);
          color: #FF5252;
          border-color: rgba(207, 19, 34, 0.4);
        }
        .trade-date {
          font-size: 0.9rem;
          color: rgba(180, 195, 220, 0.9);
          margin-left: auto;
          font-weight: 600;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .trade-card-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 2;
        }
        .trade-info-group {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px 0;
        }
        .trade-info-group div {
          flex: 1 1 28%;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 120px;
        }
        .trade-info-group .label {
          color: rgba(180, 195, 220, 0.9);
          font-size: 0.9rem;
          min-width: 65px;
          font-weight: 600;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .trade-info-group b {
          color: rgba(255, 255, 255, 1);
          font-weight: 800;
          font-family: 'Roboto Mono', 'Courier New', monospace;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          letter-spacing: 0.3px;
        }
        .trade-profit-table.profit-positive {
          color: #00E6A0;
          font-weight: 900;
          font-family: 'Roboto Mono', 'Courier New', monospace;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }
        .trade-profit-table.profit-negative {
          color: #FF5252;
          font-weight: 900;
          font-family: 'Roboto Mono', 'Courier New', monospace;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }
        .trade-profit-table.profit-neutral {
          color: rgba(255, 255, 255, 1);
          font-weight: 700;
          font-family: 'Roboto Mono', 'Courier New', monospace;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .vip-trade-card-new {
          display: flex;
          align-items: stretch;
          background: linear-gradient(120deg, #232B3E 60%, #181c2a 100%);
          border-radius: 22px;
          box-shadow: 0 8px 32px #FFD70033, 0 0 0 2px #FFD70055;
          border: 2px solid #FFD70088;
          color: #fff;
          margin-bottom: 32px;
          overflow: hidden;
        }
        .vip-trade-card-left {
          background: #FFD700;
          color: #232B3E;
          min-width: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.5rem;
          padding: 24px 12px;
        }
        .vip-symbol { font-size: 2rem; font-weight: 900; margin-bottom: 8px; }
        .vip-type { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
        .vip-status { font-size: 1.05rem; font-weight: 700; }
        .vip-trade-card-main {
          flex: 1;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }
        .vip-pnl-row {
          font-size: 1.3rem;
          font-weight: 900;
          color: #00ffae;
          margin-bottom: 8px;
        }
        .vip-pnl.up { color: #00ffae; }
        .vip-pnl.down { color: #cf1322; }
        .vip-roi { color: #FFD700; margin-left: 24px; }
        .vip-roi.up { color: #FFD700; }
        .vip-roi.down { color: #cf1322; }
        .vip-meta-row { color: #b0c4e6; font-size: 1.05rem; margin-bottom: 2px; display: flex; gap: 32px; flex-wrap: wrap; }
        .vip-trade-card-btns {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 8px;
          padding: 24px 12px;
        }
        .vip-trade-card-btns button {
          font-size: 1.08rem;
          font-weight: 700;
          border-radius: 8px;
          margin-bottom: 4px;
        }
        @media (max-width: 900px) {
          .vip-trade-card-new { flex-direction: column; }
          .vip-trade-card-left, .vip-trade-card-btns { flex-direction: row; justify-content: space-between; padding: 12px 8px; }
          .vip-trade-card-main { padding: 12px 8px; }
          .vip-meta-row { gap: 12px; }
        }
        
        /* 会员收益排名表格样式 */
        .rank-row:hover {
          background: linear-gradient(90deg,rgba(255,215,0,0.13) 0%,rgba(255,251,230,0.08) 100%) !important;
          box-shadow: 0 2px 12px rgba(255,215,0,0.2);
          transition: all 0.2s;
        }

        /* 响应式媒体查询，确保PC端只显示表格，移动端只显示卡片 */
        @media (max-width: 700px) {
          .member-rank-table-pc {
            display: none !important;
          }
          .member-rank-mobile-list {
            display: block !important;
          }
        }

        @media (min-width: 701px) {
          .member-rank-table-pc {
            display: block !important;
          }
          .member-rank-mobile-list {
            display: none !important;
          }
        }

        /* 会员协议部分样式 */
        .vip-agreement-section {
          margin: 40px 0;
          padding: 0 20px;
        }
        
        .agreement-header {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .agreement-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #FFD700;
          margin-bottom: 12px;
          background: linear-gradient(120deg, #FFD700 0%, #FFED4E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .agreement-desc {
          font-size: 1.1rem;
          color: #b0c4e6;
          line-height: 1.6;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .agreement-table-section {
          margin-bottom: 32px;
        }
        
        .table-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
          text-align: center;
        }
        
        .table-wrapper {
          overflow-x: auto;
          border-radius: 16px;
          background: rgba(35, 43, 62, 0.8);
          border: 1.5px solid #FFD70033;
          box-shadow: 0 4px 20px rgba(255, 215, 0, 0.15);
        }
        
        .vip-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }
        
        .vip-table th {
          background: linear-gradient(90deg, #2A3450 0%, #1E263D 100%);
          color: #FFD700;
          font-size: 1.1rem;
          font-weight: 700;
          padding: 14px 12px;
          text-align: center;
          border-bottom: 2px solid #FFD70033;
        }
        
        .vip-table td {
          padding: 12px;
          color: #fff;
          font-size: 1.05rem;
          text-align: center;
          border-bottom: 1px solid #FFD70022;
        }
        
        .vip-table tr:last-child td {
          border-bottom: none;
        }
        
        .highlight {
          color: #00ffae;
          font-weight: 700;
        }
        
        .member-level {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 0.95rem;
        }
        
        /* 移动端样式 */
        .agreement-mobile-cards {
          display: none;
        }
        
        .mobile-section {
          margin-bottom: 32px;
        }
        
        .mobile-section-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFD700;
          margin-bottom: 16px;
          padding: 0 16px;
        }
        
        .mobile-card-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0 16px;
        }
        
        .mobile-card {
          background: linear-gradient(135deg, #232B3E 0%, #1A2235 100%);
          border-radius: 16px;
          border: 1.5px solid #FFD70033;
          padding: 16px;
          color: #fff;
        }
        
        .mobile-badge-row {
          margin-bottom: 12px;
        }
        
        .mobile-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
        }
        
        .mobile-badge.vip {
          background: #00ffae22;
          color: #00ffae;
          border: 1px solid #00ffae;
        }
        
        .mobile-badge.gold {
          background: #FFD70022;
          color: #FFD700;
          border: 1px solid #FFD700;
        }
        
        .mobile-badge.diamond {
          background: #98D8C822;
          color: #98D8C8;
          border: 1px solid #98D8C8;
        }
        
        .mobile-badge.blackgold {
          background: #CFB53B22;
          color: #CFB53B;
          border: 1px solid #CFB53B;
        }
        
        .mobile-info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 1rem;
        }
        
        .mobile-info-row:last-child {
          margin-bottom: 0;
        }
        
        .mobile-info-label {
          color: #b0c4e6;
        }
        
        .mobile-info-value {
          color: #fff;
          font-weight: 700;
        }
        
        .agreement-footer {
          text-align: center;
          margin-top: 32px;
        }
        
        .view-agreement-btn {
          background: linear-gradient(120deg, #FFD700 0%, #FFED4E 100%);
          color: #232B3E;
          font-size: 1.1rem;
          font-weight: 700;
          padding: 12px 32px;
          border-radius: 24px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          margin: 0 auto;
          display: inline-block;
        }
        
        .view-agreement-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 215, 0, 0.4);
        }
        
        /* 响应式设计 */
        @media (max-width: 700px) {
          .agreement-table-pc {
            display: none !important;
          }
          
          .agreement-mobile-cards {
            display: block !important;
          }
          
          .agreement-title {
            font-size: 1.5rem;
          }
          
          .agreement-desc {
            font-size: 1rem;
          }
        }
        
        @media (min-width: 701px) {
          .agreement-table-pc {
            display: block !important;
          }
          
          .agreement-mobile-cards {
            display: none !important;
          }
        }

        /* 排行榜弹窗样式 */
        .rankings-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .rankings-modal {
          background: linear-gradient(135deg, #232B3E 0%, #1A2235 100%);
          border-radius: 18px;
          border: 3px solid #FFD700;
          width: 95vw;
          height: 75vh;
          max-width: 1400px;
          max-height: 700px;
          overflow: hidden;
          box-shadow: 0 0 24px rgba(255, 215, 0, 0.2);
          display: flex;
          flex-direction: column;
        }

        .rankings-modal-header {
          padding: 24px 20px 20px 20px;
          border-bottom: 1.5px solid rgba(255, 215, 0, 0.13);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          background: linear-gradient(90deg, #232e4a 0%, #232B3E 100%);
        }

        .rankings-modal-title {
          color: #FFD700;
          font-size: 1.8rem;
          font-weight: 900;
          margin: 0;
          text-shadow: 0 2px 8px rgba(24, 31, 42, 0.53);
        }

        .rankings-modal-close {
          background: none;
          border: none;
          color: #FFD700;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          transition: all 0.3s;
          line-height: 1;
          font-weight: 900;
        }

        .rankings-modal-close:hover {
          background: rgba(255, 215, 0, 0.1);
          transform: scale(1.1);
        }

        .rankings-modal-content {
          padding: 24px 20px 20px 20px;
          overflow-y: auto;
          flex: 1;
          min-height: 0;
        }

        .rankings-modal-table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 18px;
          overflow: hidden;
          background: #181F2A;
          box-shadow: 0 0 24px rgba(255, 215, 0, 0.2);
        }

        .rankings-modal-table th {
          background: #232e4a;
          color: #FFD700;
          padding: 12px 10px;
          text-align: center;
          border-bottom: 2px solid rgba(255, 215, 0, 0.2);
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: 1px;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .rankings-modal-table td {
          padding: 10px 10px;
          text-align: center;
          border-bottom: 1.5px solid rgba(255, 215, 0, 0.13);
          color: #fff;
          font-size: 1rem;
          background: linear-gradient(90deg, #232B3E 80%, #232e4a 100%);
        }

        .rankings-modal-table tr:hover {
          background: linear-gradient(90deg, rgba(255, 215, 0, 0.13) 0%, rgba(255, 251, 230, 0.08) 100%) !important;
          box-shadow: 0 2px 12px rgba(255, 215, 0, 0.2);
          transition: all 0.2s;
        }

        .rankings-modal-table th:first-child,
        .rankings-modal-table td:first-child {
          text-align: left !important;
          padding-left: 24px !important;
          width: 80px;
        }

        .rankings-modal-table th:nth-child(2),
        .rankings-modal-table td:nth-child(2) {
          text-align: left !important;
          width: 80px;
        }

        .rankings-modal-table th:nth-child(3),
        .rankings-modal-table td:nth-child(3) {
          text-align: left !important;
        }

        .rankings-modal-table th:nth-child(4),
        .rankings-modal-table td:nth-child(4) {
          text-align: left !important;
        }

        .rankings-modal-table th:nth-child(5),
        .rankings-modal-table td:nth-child(5) {
          text-align: right !important;
          padding-right: 24px !important;
        }

        .rankings-modal-table th:nth-child(6),
        .rankings-modal-table td:nth-child(6) {
          text-align: right !important;
          padding-right: 24px !important;
        }

        @media (max-width: 700px) {
          .rankings-modal {
            width: 98vw;
            height: 65vh;
            max-width: none;
            max-height: 600px;
            border-radius: 14px;
          }
          
          .rankings-modal-header {
            padding: 24px 20px 20px 20px;
          }
          
          .rankings-modal-title {
            font-size: 1.8rem;
          }
          
          .rankings-modal-close {
            font-size: 2rem;
          }
          
          .rankings-modal-content {
            padding: 24px 20px 20px 20px;
          }
          
          .rankings-modal-table th {
            font-size: 1rem;
            padding: 12px 8px;
          }
          
          .rankings-modal-table td {
            font-size: 0.95rem;
            padding: 10px 8px;
          }
          
          .rankings-modal-table th:first-child,
          .rankings-modal-table td:first-child {
            width: 60px;
            padding-left: 16px !important;
          }

          .rankings-modal-table th:nth-child(2),
          .rankings-modal-table td:nth-child(2) {
            width: 60px;
          }

          .rankings-modal-table th:nth-child(5),
          .rankings-modal-table td:nth-child(5),
          .rankings-modal-table th:nth-child(6),
          .rankings-modal-table td:nth-child(6) {
            padding-right: 16px !important;
          }
        }

        /* 排名颜色样式 */
        .rank-gold {
          color: #FFD700;
          font-weight: 700;
        }
        
        .rank-silver {
          color: #C0C0C0;
          font-weight: 700;
        }
        
        .rank-bronze {
          color: #CD7F32;
          font-weight: 700;
        }

        /* 会员等级徽章样式 */
        .member-level-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 0.9rem;
        }
        
        .member-level-badge.level-VIP {
          background: #00ffae22;
          color: #00ffae;
          border: 1px solid #00ffae;
        }
        
        .member-level-badge.level-Gold {
          background: #FFD70022;
          color: #FFD700;
          border: 1px solid #FFD700;
        }
        
        .member-level-badge.level-Diamond {
          background: #98D8C822;
          color: #98D8C8;
          border: 1px solid #98D8C8;
        }
        
        .member-level-badge.level-BlackGold {
          background: #CFB53B22;
          color: #CFB53B;
          border: 1px solid #CFB53B;
        }

        /* ========== 全页面金融背景 ========== */
        .global-financial-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        /* 流动数字 - 全页面 */
        .flowing-numbers-global {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .number-item-global {
          position: absolute;
          font-family: 'Roboto Mono', 'Courier New', monospace;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 215, 0, 0.25);
          opacity: 1;
          text-shadow: none;
          filter: none;
          letter-spacing: 1px;
          animation: numberFloatGlobal 25s linear infinite;
        }

        .number-item-global:nth-child(1) { top: 5%; left: 3%; animation-delay: 0s; }
        .number-item-global:nth-child(2) { top: 15%; left: 12%; animation-delay: 2.5s; }
        .number-item-global:nth-child(3) { top: 25%; left: 8%; animation-delay: 5s; }
        .number-item-global:nth-child(4) { top: 35%; left: 18%; animation-delay: 7.5s; }
        .number-item-global:nth-child(5) { top: 45%; left: 5%; animation-delay: 10s; }
        .number-item-global:nth-child(6) { top: 55%; left: 15%; animation-delay: 12.5s; }
        .number-item-global:nth-child(7) { top: 65%; left: 10%; animation-delay: 15s; }
        .number-item-global:nth-child(8) { top: 75%; left: 20%; animation-delay: 17.5s; }
        .number-item-global:nth-child(9) { top: 85%; left: 7%; animation-delay: 20s; }
        .number-item-global:nth-child(10) { top: 95%; left: 25%; animation-delay: 22.5s; }

        /* K线图 - 多个位置 */
        .kline-chart-global {
          position: absolute;
          opacity: 0.15;
          pointer-events: none;
          filter: none;
        }

        .kline-chart-global.kline-1 {
          bottom: 8%;
          left: 3%;
          width: 280px;
          height: 140px;
        }

        .kline-chart-global.kline-2 {
          top: 18%;
          right: 5%;
          width: 240px;
          height: 120px;
        }

        /* 金钱符号 - 全页面 */
        .money-symbols-global {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .money-symbols-global .symbol-global {
          position: absolute;
          font-size: 1.8rem;
          font-weight: 900;
          color: rgba(255, 215, 0, 0.15);
          opacity: 1;
          text-shadow: none;
          filter: none;
          animation: symbolRotateGlobal 40s linear infinite;
        }

        .money-symbols-global .symbol-global:nth-child(1) { top: 10%; left: 8%; animation-delay: 0s; }
        .money-symbols-global .symbol-global:nth-child(2) { top: 30%; left: 15%; animation-delay: 5s; }
        .money-symbols-global .symbol-global:nth-child(3) { top: 50%; left: 25%; animation-delay: 10s; }
        .money-symbols-global .symbol-global:nth-child(4) { top: 70%; left: 12%; animation-delay: 15s; }
        .money-symbols-global .symbol-global:nth-child(5) { top: 20%; left: 75%; animation-delay: 20s; }
        .money-symbols-global .symbol-global:nth-child(6) { top: 45%; left: 82%; animation-delay: 25s; }
        .money-symbols-global .symbol-global:nth-child(7) { top: 65%; left: 88%; animation-delay: 30s; }
        .money-symbols-global .symbol-global:nth-child(8) { top: 85%; left: 78%; animation-delay: 35s; }

        /* 网格线 - 全页面 */
        .grid-overlay-global {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 215, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.5;
        }

        /* 涨跌箭头装饰 */
        .trend-indicators {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .trend-arrow {
          position: absolute;
          font-size: 1.4rem;
          font-weight: 900;
          animation: arrowPulse 4s ease-in-out infinite;
          opacity: 0.2;
        }

        .trend-arrow.up {
          color: rgba(0, 255, 174, 0.25);
          text-shadow: none;
        }

        .trend-arrow.down {
          color: rgba(255, 107, 107, 0.25);
          text-shadow: none;
        }

        .trend-arrow:nth-child(1) { top: 12%; left: 20%; animation-delay: 0s; }
        .trend-arrow:nth-child(2) { top: 35%; left: 30%; animation-delay: 0.5s; }
        .trend-arrow:nth-child(3) { top: 58%; left: 22%; animation-delay: 1s; }
        .trend-arrow:nth-child(4) { top: 78%; left: 35%; animation-delay: 1.5s; }
        .trend-arrow:nth-child(5) { top: 25%; left: 70%; animation-delay: 2s; }
        .trend-arrow:nth-child(6) { top: 50%; left: 80%; animation-delay: 2.5s; }
        .trend-arrow:nth-child(7) { top: 72%; left: 75%; animation-delay: 3s; }

        /* ========== VIP Hero Section - 精致欢迎区域 ========== */
        .vip-hero-section-compact {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto 48px auto;
          padding: 44px 52px;
          border-radius: 20px;
          overflow: hidden;
          background: 
            linear-gradient(135deg, 
              rgba(15, 20, 30, 0.98) 0%, 
              rgba(22, 28, 40, 0.98) 50%, 
              rgba(28, 35, 48, 0.98) 100%
            ),
            radial-gradient(circle at top left, rgba(255, 215, 0, 0.04) 0%, transparent 50%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 
            0 12px 48px rgba(0, 0, 0, 0.8),
            0 4px 16px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4),
            inset 2px 2px 4px rgba(255, 215, 0, 0.05);
          animation: heroFadeInCompact 0.8s ease-out;
          min-height: 200px;
          z-index: 1;
          border: 2px solid rgba(255, 215, 0, 0.2);
        }

        .vip-hero-section-compact.membership-gold {
          background: linear-gradient(135deg, #1A0F0A 0%, #2A1A15 50%, #3A2A20 100%);
          box-shadow: 
            0 12px 48px rgba(255, 215, 0, 0.25),
            0 0 0 1px rgba(255, 215, 0, 0.2),
            inset 0 1px 0 rgba(255, 215, 0, 0.1);
        }

        .vip-hero-section-compact.membership-diamond {
          background: linear-gradient(135deg, #0A1A1F 0%, #152A35 50%, #1F3A4A 100%);
          box-shadow: 
            0 12px 48px rgba(0, 255, 255, 0.25),
            0 0 0 1px rgba(0, 255, 255, 0.2),
            inset 0 1px 0 rgba(0, 255, 255, 0.1);
        }

        .vip-hero-section-compact.membership-supreme {
          background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2A2A2A 100%);
          box-shadow: 
            0 12px 48px rgba(255, 215, 0, 0.3),
            0 0 0 2px rgba(255, 215, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }


        /* 紧凑内容布局 */
        .vip-hero-content-compact {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* 左侧：头像和徽章 */
        .hero-left-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .avatar-container-compact {
          position: relative;
          width: 80px;
          height: 80px;
        }

        .avatar-glow-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 2px solid rgba(255, 215, 0, 0.4);
          animation: ringGlow 3s ease-in-out infinite;
        }

        .avatar-wrapper-compact {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
        }

        .avatar-compact {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #FFD700;
          box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.6),
            inset 0 0 10px rgba(255, 215, 0, 0.2);
          transition: all 0.3s ease;
        }

        .avatar-wrapper-compact:hover .avatar-compact {
          transform: scale(1.05);
          box-shadow: 
            0 0 30px rgba(255, 215, 0, 0.8),
            inset 0 0 15px rgba(255, 215, 0, 0.3);
        }

        .membership-badge-compact {
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(26, 31, 46, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.3);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFD700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .membership-badge-compact.badge-gold {
          border-color: rgba(255, 215, 0, 0.5);
          background: rgba(255, 215, 0, 0.1);
        }

        .membership-badge-compact.badge-diamond {
          border-color: rgba(0, 255, 255, 0.5);
          background: rgba(0, 255, 255, 0.1);
          color: #00FFFF;
        }

        .membership-badge-compact.badge-supreme {
          border-color: rgba(255, 215, 0, 0.7);
          background: rgba(255, 215, 0, 0.15);
        }

        /* 中间：欢迎文字 */
        .hero-center-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .welcome-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }

        .welcome-label-compact {
          font-size: 0.95rem;
          font-weight: 800;
          color: rgba(200, 210, 230, 1);
          letter-spacing: 3px;
          text-transform: uppercase;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.6),
            0 0 1px rgba(255, 255, 255, 0.1);
          filter: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .user-name-compact {
          font-size: 2.6rem;
          font-weight: 900;
          letter-spacing: 1.5px;
          background: linear-gradient(135deg, #FFD700 0%, #FFE55C 40%, #FFD700 80%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 100%;
          animation: gradientShift 4s ease infinite;
          text-shadow: none;
          filter: none;
          position: relative;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .user-name-compact::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            transparent 100%
          );
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .hero-subtitle-compact {
          font-size: 1rem;
          color: rgba(180, 195, 220, 1);
          font-weight: 600;
          line-height: 1.6;
          margin: 0;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.5),
            0 0 1px rgba(255, 255, 255, 0.1);
          filter: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .inspiration-compact {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
          font-size: 0.95rem;
        }

        .inspiration-text {
          font-weight: 600;
          color: rgba(180, 195, 220, 1);
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.5),
            0 0 1px rgba(255, 255, 255, 0.1);
          filter: none;
          -webkit-font-smoothing: antialiased;
        }

        .inspiration-text.highlight {
          background: linear-gradient(135deg, #FFD700 0%, #FFE55C 50%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          font-size: 1rem;
          text-shadow: none;
          filter: none;
          -webkit-font-smoothing: antialiased;
        }

        .inspiration-divider {
          color: rgba(255, 215, 0, 0.3);
        }

        /* 右侧：操作按钮 */
        .hero-right-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }

        .action-btn-compact {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .action-btn-compact.primary {
          background: linear-gradient(135deg, #FFD700 0%, #FFB300 100%);
          color: #181F2A;
          box-shadow: 0 4px 16px rgba(255, 215, 0, 0.3);
        }

        .action-btn-compact.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 215, 0, 0.5);
        }

        .action-btn-compact.secondary {
          background: rgba(26, 31, 46, 0.8);
          color: #FFD700;
          border: 1px solid rgba(255, 215, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .action-btn-compact.secondary:hover {
          background: rgba(26, 31, 46, 0.95);
          border-color: rgba(255, 215, 0, 0.5);
        }

        /* 动画定义 */
        @keyframes heroFadeInCompact {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes numberFloatGlobal {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes symbolRotateGlobal {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: rotate(180deg) scale(1.3);
            opacity: 0.5;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.35;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes arrowPulse {
          0%, 100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes ringGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
            opacity: 0.4;
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
            opacity: 0.6;
          }
        }

        /* 会员徽章 */
        .membership-badge-large {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 50px;
          background: rgba(26, 31, 46, 0.9);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 215, 0, 0.3);
          box-shadow: 
            0 8px 32px rgba(255, 215, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: badgeFloat 3s ease-in-out infinite;
        }

        .membership-badge-large.badge-gold {
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 
            0 8px 32px rgba(255, 215, 0, 0.3),
            inset 0 1px 0 rgba(255, 215, 0, 0.2);
        }

        .membership-badge-large.badge-diamond {
          border-color: rgba(0, 255, 255, 0.5);
          box-shadow: 
            0 8px 32px rgba(0, 255, 255, 0.3),
            inset 0 1px 0 rgba(0, 255, 255, 0.2);
        }

        .membership-badge-large.badge-supreme {
          border-color: rgba(255, 215, 0, 0.7);
          box-shadow: 
            0 8px 32px rgba(255, 215, 0, 0.4),
            inset 0 1px 0 rgba(255, 215, 0, 0.3);
        }

        .badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: badgeRotate 8s linear infinite;
        }

        .badge-text {
          font-size: 1.3rem;
          font-weight: 900;
          letter-spacing: 2px;
          color: #FFD700;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }

        /* 头像容器 */
        .avatar-container-premium {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-rings {
          position: absolute;
          width: 180px;
          height: 180px;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0.3;
        }

        .ring-1 {
          width: 140px;
          height: 140px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: #FFD700;
          animation: ringPulse1 3s ease-in-out infinite;
        }

        .ring-2 {
          width: 160px;
          height: 160px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: #00FFAE;
          animation: ringPulse2 3s ease-in-out infinite 0.5s;
        }

        .ring-3 {
          width: 180px;
          height: 180px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: #FFD700;
          animation: ringPulse3 3s ease-in-out infinite 1s;
        }

        .avatar-wrapper-premium {
          position: relative;
          width: 140px;
          height: 140px;
          cursor: pointer;
          border-radius: 50%;
          z-index: 2;
        }

        .avatar-premium {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #FFD700;
          box-shadow: 
            0 0 40px rgba(255, 215, 0, 0.8),
            0 0 80px rgba(255, 215, 0, 0.4),
            inset 0 0 20px rgba(255, 215, 0, 0.2);
          background: linear-gradient(135deg, #232b3e 0%, #2a3444 100%);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .avatar-wrapper-premium:hover .avatar-premium {
          transform: scale(1.05);
          box-shadow: 
            0 0 60px rgba(255, 215, 0, 1),
            0 0 120px rgba(255, 215, 0, 0.6),
            inset 0 0 30px rgba(255, 215, 0, 0.3);
        }

        .avatar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .avatar-wrapper-premium:hover .avatar-overlay {
          opacity: 1;
        }

        /* 欢迎文字 */
        .hero-welcome-text {
          text-align: center;
          animation: textSlideUp 0.8s ease-out 0.2s both;
        }

        .hero-title-premium {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .welcome-label {
          font-size: 1.4rem;
          font-weight: 600;
          color: #b0c4e6;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .user-name-premium {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #FFD700 0%, #FFE55C 50%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
          animation: nameGlow 3s ease-in-out infinite alternate;
        }

        .hero-subtitle-premium {
          font-size: 1.3rem;
          color: #b0c4e6;
          font-weight: 500;
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: 32px;
        }

        /* 投资心态与激励标语 */
        .hero-inspiration-quotes {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
          padding: 24px 32px;
          background: linear-gradient(135deg, rgba(26, 31, 46, 0.6) 0%, rgba(34, 42, 58, 0.6) 100%);
          border-radius: 20px;
          border: 1px solid rgba(255, 215, 0, 0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          animation: quotesFadeIn 0.8s ease-out 0.6s both;
        }

        .quote-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          color: #b0c4e6;
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .quote-item:hover {
          color: #FFD700;
          transform: translateX(8px);
        }

        .quote-item.highlight-quote {
          color: #FFD700;
          font-weight: 700;
          font-size: 1.15rem;
          padding: 16px 20px;
          margin-top: 8px;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%);
          border-radius: 12px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          box-shadow: 0 4px 16px rgba(255, 215, 0, 0.2);
          position: relative;
        }

        .quote-item.highlight-quote::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #FFD700 0%, #FFA500 100%);
          border-radius: 2px 0 0 2px;
        }

        .quote-icon {
          flex-shrink: 0;
          color: #FFD700;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .quote-item:hover .quote-icon {
          opacity: 1;
          transform: scale(1.1);
        }

        .quote-text {
          flex: 1;
          letter-spacing: 0.5px;
        }

        /* VIP策略保密提示 */
        .section-header-with-confidentiality {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .confidentiality-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: 
            linear-gradient(135deg, 
              rgba(255, 152, 0, 0.12) 0%, 
              rgba(255, 193, 7, 0.12) 100%
            ),
            radial-gradient(circle at top left, rgba(255, 215, 0, 0.08) 0%, transparent 50%);
          border-radius: 12px;
          border: 2px solid rgba(255, 152, 0, 0.35);
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.5),
            0 2px 8px rgba(255, 152, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .confidentiality-badge::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 70%
          );
          animation: badgeShine 4s ease-in-out infinite;
        }

        .confidentiality-icon {
          color: #FF9800;
          flex-shrink: 0;
          filter: none;
          -webkit-font-smoothing: antialiased;
          position: relative;
          z-index: 1;
        }

        .confidentiality-text {
          color: rgba(255, 215, 0, 1);
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.6),
            0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          filter: none;
        }

        /* 动画定义 */
        @keyframes quotesFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 
              0 4px 16px rgba(0, 0, 0, 0.5),
              0 2px 8px rgba(255, 152, 0, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.12),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 152, 0, 0.35);
          }
          50% {
            box-shadow: 
              0 6px 20px rgba(0, 0, 0, 0.6),
              0 3px 12px rgba(255, 152, 0, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 152, 0, 0.45);
          }
        }

        @keyframes badgeShine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            filter: none;
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 12px rgba(255, 152, 0, 0.8));
          }
        }

        /* 操作按钮 */
        .hero-actions {
          display: flex;
          gap: 20px;
          animation: buttonsFadeIn 0.8s ease-out 0.4s both;
        }

        .hero-action-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .hero-action-btn.primary-action {
          background: linear-gradient(135deg, #FFD700 0%, #FFB300 50%, #FFD700 100%);
          color: #181F2A;
          box-shadow: 
            0 8px 32px rgba(255, 215, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            0 0 0 1px rgba(255, 215, 0, 0.5);
        }

        .hero-action-btn.primary-action:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 16px 48px rgba(255, 215, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            0 0 0 2px rgba(255, 215, 0, 0.7),
            0 0 60px rgba(255, 215, 0, 0.3);
        }

        .hero-action-btn.secondary-action {
          background: rgba(26, 31, 46, 0.9);
          color: #FFD700;
          border: 2px solid rgba(255, 215, 0, 0.3);
          backdrop-filter: blur(20px);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .hero-action-btn.secondary-action:hover {
          transform: translateY(-4px) scale(1.05);
          border-color: rgba(255, 215, 0, 0.6);
          background: rgba(26, 31, 46, 0.95);
          box-shadow: 
            0 16px 48px rgba(255, 215, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        /* ========== Premium Cards Grid - 现代化高级数据卡片 ========== */
        .premium-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          margin: 48px auto 64px auto;
          padding: 0 32px;
        }

        .premium-stat-card {
          position: relative;
          background: 
            linear-gradient(135deg, 
              rgba(15, 20, 30, 0.98) 0%, 
              rgba(22, 28, 40, 0.98) 50%, 
              rgba(28, 35, 48, 0.98) 100%
            ),
            radial-gradient(circle at top right, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
          border-radius: 18px;
          padding: 32px 28px;
          border: 2px solid rgba(255, 215, 0, 0.2);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.8),
            0 4px 12px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4),
            inset 2px 2px 4px rgba(255, 215, 0, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          animation: cardFadeIn 0.6s ease-out both;
          z-index: 1;
        }

        .premium-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.02) 0%, 
              transparent 50%,
              rgba(0, 0, 0, 0.03) 100%
            );
          border-radius: 18px;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }

        .premium-stat-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .premium-stat-card:nth-child(1) { animation-delay: 0.1s; }
        .premium-stat-card:nth-child(2) { animation-delay: 0.2s; }
        .premium-stat-card:nth-child(3) { animation-delay: 0.3s; }
        .premium-stat-card:nth-child(4) { animation-delay: 0.4s; }
        .premium-stat-card:nth-child(5) { animation-delay: 0.5s; }
        .premium-stat-card:nth-child(6) { animation-delay: 0.6s; }

        .premium-stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 
            0 16px 64px rgba(255, 215, 0, 0.2),
            0 6px 20px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(255, 255, 255, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5),
            inset 2px 2px 6px rgba(255, 215, 0, 0.08);
        }

        .premium-stat-card:hover::before {
          opacity: 1;
        }

        .premium-stat-card:hover::after {
          opacity: 1;
        }

        .card-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: 
            linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #FFD700;
          border: 2px solid rgba(255, 215, 0, 0.3);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
        }

        .card-icon-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .premium-stat-card:hover .card-icon-wrapper {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(255, 215, 0, 0.15) 100%);
          border-color: rgba(255, 215, 0, 0.5);
          transform: scale(1.08);
          box-shadow: 
            0 4px 16px rgba(255, 215, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .premium-stat-card:hover .card-icon-wrapper::before {
          left: 100%;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .card-label {
          font-size: 0.75rem;
          color: rgba(200, 210, 230, 1);
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.5),
            0 0 1px rgba(255, 255, 255, 0.1);
          filter: none;
        }

        .card-value {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .premium-value {
          font-size: 2.4rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          line-height: 1.1;
          font-family: 'Roboto Mono', 'Courier New', monospace;
        }

        .value-number {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          font-weight: 900;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.9),
            0 2px 4px rgba(0, 0, 0, 0.7);
          filter: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          letter-spacing: 0.5px;
        }

        .value-unit {
          font-size: 1.1rem;
          color: rgba(200, 210, 230, 0.85);
          font-weight: 700;
          opacity: 1;
          margin-left: 2px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 150%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: 50%;
        }

        .premium-stat-card:hover .card-glow {
          opacity: 0.6;
        }

        /* 动画定义 */
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }

        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes badgeRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ringPulse1 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes ringPulse2 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.5;
          }
        }

        @keyframes ringPulse3 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.4;
          }
        }

        @keyframes textSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes nameGlow {
          0% { 
            text-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
            filter: brightness(1);
          }
          100% { 
            text-shadow: 0 0 60px rgba(255, 215, 0, 0.9);
            filter: brightness(1.2);
          }
        }

        @keyframes buttonsFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* 响应式设计 */
        @media (max-width: 900px) {
          .vip-hero-section-compact {
            padding: 24px 20px;
            margin-bottom: 24px;
          }

          .vip-hero-content-compact {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }

          .hero-center-section {
            width: 100%;
          }

          .hero-right-section {
            width: 100%;
            flex-direction: row;
          }

          .action-btn-compact {
            flex: 1;
          }

          .user-name-compact {
            font-size: 1.6rem;
          }

          .kline-chart-global {
            display: none;
          }
          
          .number-item-global {
            font-size: 0.9rem;
            opacity: 0.25;
          }
          
          .symbol-global {
            font-size: 1.8rem;
            opacity: 0.15;
          }
          
          .trend-arrow {
            font-size: 1.3rem;
            opacity: 0.2;
          }

          .user-name-premium {
            font-size: 2.5rem;
          }

          .hero-subtitle-premium {
            font-size: 1.1rem;
          }

          .hero-inspiration-quotes {
            padding: 20px 24px;
            gap: 12px;
          }

          .quote-item {
            font-size: 0.95rem;
          }

          .quote-item.highlight-quote {
            font-size: 1.05rem;
            padding: 12px 16px;
          }

          .section-header-with-confidentiality {
            flex-direction: column;
            align-items: flex-start;
          }

          .confidentiality-badge {
            padding: 12px 20px;
            font-size: 0.9rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 400px;
          }

          .hero-action-btn {
            width: 100%;
            justify-content: center;
          }

          .premium-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 16px;
          }

          .premium-stat-card {
            padding: 24px 20px;
          }

          .premium-value {
            font-size: 2rem;
          }
        }

        @media (max-width: 600px) {
          .vip-hero-section {
            padding: 32px 16px;
            border-radius: 20px;
          }

          .membership-badge-large {
            padding: 12px 24px;
            gap: 8px;
          }

          .badge-text {
            font-size: 1rem;
          }

          .avatar-wrapper-premium {
            width: 120px;
            height: 120px;
          }

          .ring-1, .ring-2, .ring-3 {
            width: 100%;
            height: 100%;
          }

          .user-name-premium {
            font-size: 2rem;
          }

          .hero-inspiration-quotes {
            padding: 16px 20px;
            gap: 10px;
          }

          .quote-item {
            font-size: 0.9rem;
            padding: 8px 0;
          }

          .quote-item.highlight-quote {
            font-size: 1rem;
            padding: 12px 14px;
          }

          .confidentiality-badge {
            padding: 10px 16px;
            font-size: 0.85rem;
          }

          .confidentiality-text {
            font-size: 0.85rem;
          }
        }
</style>