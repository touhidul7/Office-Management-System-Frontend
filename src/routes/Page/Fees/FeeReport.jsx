/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { feeReportByDate } from "@/lib/api";
import GenerateFeeReport from "./GenerateFeeReport";
const FeeReport = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [reportData, setReportData] = useState([]);
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [totalCost, setTotalCost] = useState("");

  const reportHandler = (e) => {
    e.preventDefault();
    feeReportByDate(start, end)
      .then((res) => res.json())
      .then((data) => {
        setReportData(data);
        // total income data
        const totalIncome = data.regular_fee.reduce((acc, curr) => {
          return acc + parseFloat(curr.total);
        }, 0);
        setIncome(totalIncome);
        console.log(totalIncome);
      });
  };

  console.log(income);

  return (
    <>
      {" "}
      <div style={{ overflow: "hidden" }}>
        <h1 className="text-2xl font-bold mb-3">Report Details</h1>
        <form className="border p-5 rounded" onSubmit={reportHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <label htmlFor="Assign Teacher" className="md:col-span-1">
              From
              <Input
                type="date"
                name="fromdDate"
                onChange={(e) => setStart(e.target.value)}
              />
            </label>
            <label htmlFor="Assign Teacher" className="md:col-span-1">
              To
              <Input
                type="date"
                name="toDate"
                onChange={(e) => setEnd(e.target.value)}
              />
            </label>
          </div>
          <Button size="sm" className="h-8 gap-1 mt-5">
            Generate Report
          </Button>
        </form>
      </div>
      {/* View Account */}
      <GenerateFeeReport
        regularFee={reportData.regular_fee}
        start={start}
        end={end}
        income={income}
        expense={expense}
        totalCost={totalCost}
      />
    </>
  );
};

export default FeeReport;
