import DiagnosisHistory from "@/components/DiagnosisHistory";
import DiagnosticList from "@/components/DiagnosticList";
import LabResults from "@/components/LabResults";
import PatientProfile from "@/components/PatientProfile";
import PatientsList from "@/components/PatientsList";
import Image from "next/image";

export default  async function Home() {

  const auth = btoa(`${process.env.username}:${process.env.password}`)
  const res = await fetch(process.env.API_URL, {
    headers: {
      'Authorization': `Basic ${auth}`
    }
  })

  const patients = await res.json();

  // since we are only rendering jessica taylor's medical record
  // we find the record from patients record
  const jessicaTaylor = patients?.find(patient => patient?.name?.toLowerCase() === 'jessica taylor')


  return (
    <main className="min-h-screen grid grid-cols-4 gap-8">
          <PatientsList patients={patients} />
        <div className="col-span-2 flex flex-col gap-8">
          <DiagnosisHistory patient={jessicaTaylor} />
          <DiagnosticList diagnosticList={jessicaTaylor?.diagnostic_list} />
        </div>
        <div className="flex flex-col gap-8">
          <PatientProfile patient={jessicaTaylor} />
          <LabResults patient={jessicaTaylor} />
        </div>
    </main>
  );
}
