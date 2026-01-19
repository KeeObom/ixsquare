export default function DisclaimerPage() {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-zinc-900" />
            Disclaimer
          </div>
  
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Important Notice
          </h1>
  
          <div className="mt-8 max-w-3xl rounded-3xl border bg-zinc-50 p-7 text-sm text-zinc-700">
            <p>
              DiAnixSquare International Agency provides advisory and support services only. Visa, admission,
              permanent residence, and citizenship decisions are made solely by relevant authorities and institutions.
            </p>
  
            <p className="mt-4">
              We do not influence outcomes and we do not guarantee approvals. All applications are assessed strictly
              based on eligibility, documentation, and decisions by relevant authorities.
            </p>
  
            <p className="mt-4">
              Information and guidance provided by DiAnixSquare is intended to support clients in understanding
              processes and requirements. Clients remain responsible for the accuracy and completeness of information
              submitted in any application.
            </p>
  
            <div className="mt-6 rounded-2xl border bg-white p-4">
              <div className="font-semibold text-zinc-900">DiAnixSquare International Agency</div>
              <div className="mt-1 text-zinc-600">Trust. Transparency. Global Access.</div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  