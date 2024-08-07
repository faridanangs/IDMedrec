import { jsPDF } from "jspdf";
import QRCode from "qrcode";

// base64 Pdf Logo
const PdfLogo = "data:image/png;base64,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"

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const createRegisterPdf = async (data, wallet, ipfsUri) => {
  const qrCodeData = await QRCode.toDataURL(ipfsUri);

  // Create PDF document
  const doc = new jsPDF({
    unit: 'pt',
    format: [595, 580] // A4 size in points
  });

  // Calculate border width based on document format
  const borderWidth = 595 - 10 * 2; // Total width - left and right margins

  // Add a decorative border
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(1);
  doc.rect(10, 10, 560, 575); // Adjust height to fit content inside border

  // Add logo image
  doc.addImage(PdfLogo, 'PNG', 40, 20, 200, 50);
  // Add QR code
  doc.addImage(qrCodeData, "PNG", 390, 380, 170, 170);

  // Add title
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#000"); // Set text color to black for visibility
  doc.text(`${capitalizeFirstLetter(data.user_role)} Registration`, 40, 130);

  // Add patient information
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  const leftMargin = 40;
  const topMargin = 160;
  const lineHeight = 20;

  doc.setTextColor("#000"); // Set text color to black for visibility
  doc.text(`Full Name: ${data.name}`, leftMargin, topMargin);
  doc.text(`Username: ${data.username}`, leftMargin, topMargin + lineHeight);
  doc.text(`ID: ${data.id}`, leftMargin, topMargin + 2 * lineHeight);
  doc.text(`Email: ${data.email}`, leftMargin, topMargin + 3 * lineHeight);
  doc.text(`Public Address: ${wallet.address}`, leftMargin, topMargin + 4 * lineHeight);
  doc.text(`User Role: ${data.user_role}`, leftMargin, topMargin + 5 * lineHeight);
  doc.text(`Created At: ${data.created_at}`, leftMargin, topMargin + 6 * lineHeight);
  data.specialty && doc.text(`Specialty: ${data.specialty}`, leftMargin, topMargin + 7 * lineHeight);

  // Handle long private address
  const privateAddressText = doc.splitTextToSize(`Private Address: ${wallet.privateKey}`, 515);
  doc.text(privateAddressText, leftMargin, topMargin + (data?.specialty ? 8 : 7) * lineHeight);

  // Add warning text at the bottom in red
  const warningText = '* Please keep this document safe and confidential.';
  const textWidth = doc.getStringUnitWidth(warningText) * 14; // Font size 14
  const textX = (borderWidth - textWidth) / 2; // Center text horizontally
  const textY = 575; // 20 is the margin from the bottom
  doc.setTextColor("#FF0000"); // Red color
  doc.text(warningText, textX, textY);

  // Output the PDF to a data URL
  doc.save(`${data.user_role}.pdf`);
}