
    // Function to add a new todo
    function addTodo() {
        let input = document.getElementById("todoInput");
        let inputValue = input.value.trim();

        if (inputValue === "") {
            alert("write a todo first");
            return;
        }

        let listItem = document.createElement("li");
        listItem.innerHTML = "<input type='checkbox' onclick='toggleEdit(this)'><span class='todo-text'>" + inputValue + "</span>  <button class='remove' onclick='removeTodo(this.parentNode)'>Remove</button>";

        document.getElementById("todos").appendChild(listItem);

        input.value = ""; // Clear input field
    }

    // Function to remove a todo
    function removeTodo(item) {
        item.parentNode.removeChild(item);
    }

    // Function to toggle edit mode
    function toggleEdit(checkbox) {
        let listItem = checkbox.parentNode;
        let span = listItem.querySelector(".todo-text");
        let editButton = listItem.querySelector(".save");

        if (checkbox.checked) {
            span.contentEditable = true;
            span.focus();
            editButton.style.display = "inline-block"; // Show edit button
        } else {
            span.contentEditable = false;
            editButton.style.display = "none"; // Hide edit button
        }
    }