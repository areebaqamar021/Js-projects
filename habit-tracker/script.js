document.addEventListener('DOMContentLoaded', () => {
    loadHabits();
});

function addHabit() {
    const habitName = document.getElementById('habitName').value;
    const habitFrequency = document.getElementById('habitFrequency').value;

    if (habitName === '') {
        alert('Please enter a habit name.');
        return;
    }

    const habits = getHabits();
    habits.push({ name: habitName, frequency: habitFrequency, completed: false });
    saveHabits(habits);
    renderHabits();
    document.getElementById('habitName').value = '';
}
function loadHabits() {
    renderHabits();
}

function renderHabits() {
    const habits = getHabits();
    const habitsContainer = document.getElementById('habitsContainer');
    habitsContainer.innerHTML = '';

    habits.forEach((habit, index) => {
        const habitElement = document.createElement('div');
        habitElement.classList.add('habit');
        if (habit.completed) {
            habitElement.classList.add('completed');
        }

        habitElement.innerHTML = `
            <span>${habit.name} (${habit.frequency})</span>
            <div class="actions">
                <button onclick="toggleHabit(${index})">${habit.completed ? 'Undo' : 'Complete'}</button>
                ${habit.completed ? `<button onclick="removeHabit(${index})">Remove</button>` : ''}
            </div>
        `;

        habitsContainer.appendChild(habitElement);
    });
}

function toggleHabit(index) {
    const habits = getHabits();
    habits[index].completed = !habits[index].completed;
    saveHabits(habits);
    renderHabits();
}

function removeHabit(index) {
    const habits = getHabits();
    habits.splice(index, 1);
    saveHabits(habits);
    renderHabits();
}

function getHabits() {
    const habits = localStorage.getItem('habits');
    return habits ? JSON.parse(habits) : [];
}

function saveHabits(habits) {
    localStorage.setItem('habits', JSON.stringify(habits));
}
