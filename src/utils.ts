export const downloadResume = async () => {
    const link = document.createElement("a");
    link.href = "https://res.cloudinary.com/dvlhy87zl/image/upload/v1740701006/lqy90oicgxdhcvfud9ix.pdf";
    link.download = "Jalen Arms - Resume 2025.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild
    
    
}
