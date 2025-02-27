export const downloadResume = async () => {
    const link = document.createElement("a");
    link.href = "/Jalen Arms - Resume 2025.pdf";
    link.download = "Jalen Arms - Resume 2025.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild
    
    
}
