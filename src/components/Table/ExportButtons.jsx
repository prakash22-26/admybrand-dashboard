import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ExportButtons({ data = [] }) {
  const exportToCSV = () => {
    if (!data.length) return;
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Data");
    const buffer = write(workbook, { bookType: "csv", type: "array" });
    const blob = new Blob([buffer], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "data.csv");
  };

  const exportToPDF = () => {
    if (!data.length) return;
    const doc = new jsPDF();
    const columns = Object.keys(data[0]);
    const rows = data.map((row) => Object.values(row));
    autoTable(doc, {
      head: [columns],
      body: rows,
      styles: { fontSize: 10 },
      theme: "grid",
    });
    doc.save("data.pdf");
  };

  return (
    <div className="flex flex-wrap gap-3 mt-2">
      <button
        onClick={exportToCSV}
        className="p-[6px] rounded-[10px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-sm transition mx-[10px]"
      >
        📥 Export CSV
      </button>
      <button
        onClick={exportToPDF}
        className="p-[6px] rounded-[10px] bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium shadow-sm transition mx-[10px]"
      >
        🧾 Export PDF
      </button>
    </div>
  );
}
