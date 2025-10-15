// Initialize
let currentMonth = new Date();
let currentDate = new Date().toDateString();
// Mobile menu
function openMobileMenu() {
    document.getElementById('mobile-menu').classList.add('open');
    document.querySelector('.mobile-menu-overlay').classList.add('open');
}
function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
    document.querySelector('.mobile-menu-overlay').classList.remove('open');
}
// Theme
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}
// Navigation
function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    event.target.classList.add('active');
    if (section === 'calendar') renderCalendar();
    if (section === 'morning') loadTodos();
    if (section === 'goals') loadGoals();
    if (section === 'journal') loadJournal();
}
function showSectionMobile(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    event.target.closest('.mobile-nav-btn').classList.add('active');
    window.scrollTo(0, 0);
    if (section === 'calendar') renderCalendar();
    if (section === 'morning') loadTodos();
    if (section === 'goals') loadGoals();
    if (section === 'journal') loadJournal();
}
// Journal functions
function saveJournal() {
    const q3 = document.querySelector('input[name="q3"]:checked')?.value || '';
    const j1 = document.getElementById('journal1').value;
    const j2 = document.getElementById('journal2').value;
    const j3 = document.getElementById('journal3').value;
    const entry = {
        date: currentDate,
        timestamp: new Date().toISOString(),
        q1: { text: j1 },
        q2: { text: j2 },
        q3: { rating: q3, text: j3 }
    };
    const journals = JSON.parse(localStorage.getItem('journals') || '{}');
    journals[currentDate] = entry;
    localStorage.setItem('journals', JSON.stringify(journals));
    showStatus('journal-status', 'Journal saved successfully! ✨', 'success');
}
function loadJournal() {
    const journals = JSON.parse(localStorage.getItem('journals') || '{}');
    const entry = journals[currentDate];
    
    if (entry) {
        if (entry.q3.rating) document.querySelector(`input[name="q3"][value="${entry.q3.rating}"]`).checked = true;
        document.getElementById('journal1').value = entry.q1.text || '';
        document.getElementById('journal2').value = entry.q2.text || '';
        document.getElementById('journal3').value = entry.q3.text || '';
    }
}
// Todo functions
function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (!text) return;
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    if (!todos[currentDate]) todos[currentDate] = [];
    
    todos[currentDate].push({ text, completed: false, id: Date.now() });
    localStorage.setItem('todos', JSON.stringify(todos));
    
    input.value = '';
    loadTodos();
}
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    const todayTodos = todos[currentDate] || [];
    const list = document.getElementById('todo-list');
    
    const completed = todayTodos.filter(t => t.completed).length;
    const total = todayTodos.length;
    document.getElementById('todo-progress').textContent = `${completed}/${total}`;
    
    list.innerHTML = todayTodos.map((todo, index) => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <span>${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})" 
                    style="margin-left: auto; padding: 4px 8px; font-size: 11px;">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `).join('');
    
    if (todayTodos.length === 0) {
        list.innerHTML = '<li style="text-align: center; color: var(--text-secondary); padding: 20px; font-size: 13px;">No tasks yet. Add your first task!</li>';
    }
}
function toggleTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    const todayTodos = todos[currentDate] || [];
    const todo = todayTodos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
}
function deleteTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    const todayTodos = todos[currentDate] || [];
    todos[currentDate] = todayTodos.filter(t => t.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
}
function clearCompleted() {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    const todayTodos = todos[currentDate] || [];
    todos[currentDate] = todayTodos.filter(t => !t.completed);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
}
// Calendar functions
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    document.getElementById('current-month').textContent = 
        currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const journals = JSON.parse(localStorage.getItem('journals') || '{}');
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    
    // Get all goal deadline dates
    const deadlineDates = goals.map(g => new Date(g.deadline).toDateString());
    
    grid.innerHTML = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        .map(day => `<div class="calendar-header">${day}</div>`).join('');
    for (let i = 0; i < firstDay; i++) {
        grid.innerHTML += '<div class="calendar-day"></div>';
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day).toDateString();
        const hasJournal = journals[date];
        const hasTodo = todos[date];
        const isToday = date === new Date().toDateString();
        const hasDeadline = deadlineDates.includes(date);
        
        let className = 'calendar-day';
        if (isToday) className += ' today';
        if (hasJournal) className += ' completed-journal';
        else if (hasTodo) className += ' completed-todo';
        else if (new Date(date) < new Date() && !isToday) className += ' missed';
        if (hasDeadline) className += ' has-deadline';
        
        grid.innerHTML += `<div class="${className}" onclick="viewEntry('${date}')">${day}</div>`;
    }
}
function changeMonth(delta) {
    currentMonth.setMonth(currentMonth.getMonth() + delta);
    renderCalendar();
}
function viewEntry(date) {
    const journals = JSON.parse(localStorage.getItem('journals') || '{}');
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    const view = document.getElementById('entry-view');
    
    let html = `<h4><i class="fas fa-calendar-day"></i> ${date}</h4>`;
    
    // Check for goal deadlines
    const dateGoals = goals.filter(g => new Date(g.deadline).toDateString() === date);
    if (dateGoals.length > 0) {
        html += '<h4><i class="fas fa-bullseye"></i> Goal Deadlines</h4><ul>';
        dateGoals.forEach(goal => {
            html += `<li style="margin: 5px 0; color: var(--accent-yellow);">${goal.type.toUpperCase()}: ${goal.text} ${goal.completed ? '✓' : ''}</li>`;
        });
        html += '</ul>';
    }
    
    if (journals[date]) {
        html += '<h4><i class="fas fa-book"></i> Journal Entry</h4>';
        html += `<p><strong>Q1:</strong> ${journals[date].q1.text || 'No response'}</p>`;
        html += `<p><strong>Q2:</strong> ${journals[date].q2.text || 'No response'}</p>`;
        html += `<p><strong>Q3 (${journals[date].q3.rating || 'N/A'}):</strong> ${journals[date].q3.text || 'No response'}</p>`;
    }
    
    if (todos[date]) {
        html += '<h4><i class="fas fa-list-check"></i> To-Do List</h4><ul>';
        todos[date].forEach(todo => {
            html += `<li style="margin: 5px 0;">${todo.completed ? '✓' : '○'} ${todo.text}</li>`;
        });
        html += '</ul>';
    }
    
    if (!journals[date] && !todos[date] && dateGoals.length === 0) {
        html += '<p style="color: var(--text-secondary);"><i class="fas fa-inbox"></i> No entries for this day.</p>';
    }
    
    view.innerHTML = html;
    view.style.display = 'block';
}
// Goals functions
function addGoal(type) {
    const text = document.getElementById(`${type}-goal-text`).value.trim();
    const date = document.getElementById(`${type}-goal-date`).value;
    
    if (!text || !date) {
        alert('Please fill in both goal and deadline');
        return;
    }
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    goals.push({ type, text, deadline: date, completed: false, id: Date.now() });
    localStorage.setItem('goals', JSON.stringify(goals));
    
    document.getElementById(`${type}-goal-text`).value = '';
    document.getElementById(`${type}-goal-date`).value = '';
    loadGoals();
    checkGoalDeadlines();
}
function loadGoals() {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    const list = document.getElementById('goal-list');
    
    if (goals.length === 0) {
        list.innerHTML = '<li style="text-align: center; color: var(--text-secondary); padding: 20px; font-size: 13px;">No goals set yet. Create your first goal!</li>';
        return;
    }
    
    list.innerHTML = goals.map(goal => `
        <li class="goal-item ${goal.completed ? 'completed' : ''}">
            <div class="goal-item-header">
                <div>
                    <strong style="color: var(--accent-blue);">${goal.type.toUpperCase()}</strong><br>
                    <span style="font-size: 14px;">${goal.text}</span><br>
                    <small style="color: var(--text-secondary); font-size: 12px;">
                        <i class="fas fa-calendar"></i> Deadline: ${goal.deadline}
                    </small>
                </div>
                <div class="goal-item-actions">
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 12px; width: auto;" 
                            onclick="toggleGoal(${goal.id})">
                        ${goal.completed ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>'}
                    </button>
                    <button class="delete-btn" onclick="deleteGoal(${goal.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </li>
    `).join('');
}
function toggleGoal(id) {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    const goal = goals.find(g => g.id === id);
    if (goal) goal.completed = !goal.completed;
    localStorage.setItem('goals', JSON.stringify(goals));
    loadGoals();
    renderCalendar();
}
function deleteGoal(id) {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    const filtered = goals.filter(g => g.id !== id);
    localStorage.setItem('goals', JSON.stringify(filtered));
    loadGoals();
    renderCalendar();
}
function checkGoalDeadlines() {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    const today = new Date().toISOString().split('T')[0];
    
    goals.forEach(goal => {
        if (goal.deadline === today && !goal.completed) {
            if (Notification.permission === 'granted') {
                new Notification('Echo: Goal Deadline Today!', {
                    body: `Your ${goal.type} goal deadline is today: ${goal.text}`,
                    icon: '🎯'
                });
            }
        }
    });
}
// Notifications
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('This browser does not support notifications');
        return;
    }
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            alert('Notifications enabled! You\'ll receive morning and evening reminders.');
            scheduleNotifications();
        }
    });
}
function scheduleNotifications() {
    setInterval(() => {
        const hour = new Date().getHours();
        
        if (hour === 7 && Notification.permission === 'granted') {
            new Notification('Good morning!', {
                body: 'Plan your day with Echo.',
                icon: '☀️'
            });
        }
        
        if (hour === 21 && Notification.permission === 'granted') {
            new Notification('Time to reflect', {
                body: 'How was your day? Share your thoughts.',
                icon: '🌙'
            });
        }
    }, 60000 * 60);
}
function showStatus(elementId, message, type) {
    const status = document.getElementById(elementId);
    status.innerHTML = `<div class="status-message ${type}">${message}</div>`;
    setTimeout(() => status.innerHTML = '', 3000);
}
// Initialize on load
loadJournal();
loadTodos();
renderCalendar();
checkGoalDeadlines();

if (Notification.permission === 'granted') {
    scheduleNotifications();
}
setInterval(checkGoalDeadlines, 60000 * 60 * 24);