# Project Notes

## Checkbox Two-Way Binding

src > components > Whisky > FlavourSelect.jsx

- Checkboxes use e.target.checked as e.target.value will always return "on"
- It's necessary to pass in the event instead of changing the state as the state doesn't change instantly. Alternatively I could use useEffect with checked as the dependency as this would then execute after the state change.
