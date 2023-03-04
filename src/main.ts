/**
 * main.ts
 *
 * Bootstraps plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'

// Components
import App from './App.vue'
import './style.css'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')