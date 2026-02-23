const textarea = document.querySelector(".txt");
const resetBtn = document.querySelector(".reset");
const saveBtn = document.querySelector(".save");

// RESET
resetBtn.addEventListener("click", () => {
    textarea.value = "";
});


// SAVE
saveBtn.addEventListener("click", () => {
    if (textarea.value.trim() === "") return;

    const ok = confirm("do u wanna save?");
    if (!ok) return;

    const blob = new Blob([textarea.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "type.txt";
    a.click();

    URL.revokeObjectURL(url);
});