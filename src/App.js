function App() {
  return (
    <div className="px-[var(--margin-x)] pb-8">
      <div className="mt-5 space-y-4">
        <div className="alert flex rounded-lg bg-slate-200 px-4 py-4 text-slate-600 dark:bg-navy-500 dark:text-navy-100 sm:px-5">
          This is simple alert
        </div>

        <div className="alert flex rounded-lg bg-primary px-4 py-4 text-white dark:bg-accent sm:px-5">
          This is simple alert
        </div>

        <div className="alert flex rounded-lg bg-secondary px-4 py-4 text-white sm:px-5">
          This is simple alert
        </div>

        <div className="alert flex rounded-lg bg-info px-4 py-4 text-white sm:px-5">
          This is simple alert
        </div>

        <div className="alert flex rounded-lg bg-success px-4 py-4 text-white sm:px-5">
          This is simple alert
        </div>

        <div className="alert flex rounded-lg bg-warning px-4 py-4 text-white sm:px-5">
          This is simple alert
        </div>

        <div className="alert flex rounded-lg bg-error px-4 py-4 text-white sm:px-5">
          This is simple alert
        </div>
      </div>

      <div className="inline-space mt-5">
        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-slate-200 text-base uppercase text-slate-600 dark:bg-navy-500 dark:text-navy-100">
            jd
          </div>
        </div>

        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-primary text-base uppercase text-white dark:bg-accent">
            jd
          </div>
        </div>

        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-secondary text-base uppercase text-white">
            jd
          </div>
        </div>

        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-info text-base uppercase text-white">
            jd
          </div>
        </div>

        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-success text-base uppercase text-white">
            jd
          </div>
        </div>

        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-warning text-base uppercase text-white">
            jd
          </div>
        </div>

        <div className="avatar h-12 w-12">
          <div className="is-initial rounded-full bg-error text-base uppercase text-white">
            jd
          </div>
        </div>
      </div>
      <div className="inline-space mt-5">
        <div className="badge bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100">
          Default
        </div>
        <div className="badge bg-primary text-white dark:bg-accent">
          Primary
        </div>
        <div className="badge bg-secondary text-white">Secondary</div>
        <div className="badge bg-info text-white">Info</div>
        <div className="badge bg-success text-white">Success</div>
        <div className="badge bg-warning text-white">Warning</div>
        <div className="badge bg-error text-white">Error</div>
        <div className="badge bg-navy-700 text-white dark:bg-navy-900">
          Dark
        </div>
        <div className="badge bg-slate-150 text-slate-800">Light</div>
      </div>

      <div className="inline-space mt-5 flex flex-wrap">
        <button className="btn rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
          Default
        </button>
        <button className="btn rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          Primary
        </button>
        <button className="btn rounded-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90">
          Secondary
        </button>
        <button className="btn rounded-full bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
          Info
        </button>
        <button className="btn rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90">
          Success
        </button>
        <button className="btn rounded-full bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90">
          Warning
        </button>
        <button className="btn rounded-full bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90">
          Error
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        <div className="card px-4 py-4 sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
              Simple Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="card rounded-2xl px-4 py-4 sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
              Rounded Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="card border border-slate-150 px-4 py-4 shadow-none dark:border-navy-600 sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
              Bordered Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-primary px-4 py-4 text-white dark:bg-accent sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Primary Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-secondary px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Secondary Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-info px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Info Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-success px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Success Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-warning px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Warning Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-error px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Error Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-primary px-4 py-4 text-white shadow-lg shadow-primary/50 dark:bg-accent dark:shadow-accent/50 sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Glow Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-warning px-4 py-4 text-white shadow-lg shadow-warning/50 sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Glow Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-info px-4 py-4 text-white shadow-lg shadow-info/50 sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Glow Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Gradient Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Gradient Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 px-4 py-4 text-white sm:px-5">
          <div>
            <h2 className="text-lg font-medium tracking-wide line-clamp-1">
              Gradient Card
            </h2>
          </div>
          <div className="pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              laboriosam praesentium adipisci iure doloribus accusamus animi
              quos.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 p-1">
          <div className="rounded-lg bg-slate-50 px-4 py-4 dark:bg-navy-900 sm:px-5">
            <div>
              <h2 className="text-lg font-medium tracking-wide text-slate-600 line-clamp-1 dark:text-navy-100">
                Outlined Gradient
              </h2>
            </div>
            <div className="pt-2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                laboriosam praesentium adipisci iure doloribus accusamus animi
                quos.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-green-400 to-fuchsia-400 p-1">
          <div className="rounded-lg bg-slate-50 px-4 py-4 dark:bg-navy-900 sm:px-5">
            <div>
              <h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                Outlined Gradient
              </h2>
            </div>
            <div className="pt-2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                laboriosam praesentium adipisci iure doloribus accusamus animi
                quos.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 p-1">
          <div className="rounded-lg bg-slate-50 px-4 py-4 dark:bg-navy-900 sm:px-5">
            <div>
              <h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                Outlined Gradient
              </h2>
            </div>
            <div className="pt-2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                laboriosam praesentium adipisci iure doloribus accusamus animi
                quos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-4/12 overflow-hidden rounded-full bg-slate-500 dark:bg-navy-400" />
        </div>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-5/12 overflow-hidden rounded-full bg-primary dark:bg-accent" />
        </div>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-6/12 overflow-hidden rounded-full bg-secondary" />
        </div>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-7/12 overflow-hidden rounded-full bg-info" />
        </div>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-8/12 overflow-hidden rounded-full bg-success" />
        </div>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-9/12 overflow-hidden rounded-full bg-warning" />
        </div>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className="is-active relative w-10/12 overflow-hidden rounded-full bg-error" />
        </div>
      </div>

      <div className="mt-5 max-w-md">
        <div className="flex flex-col border border-slate-150 dark:border-navy-500">
          <div className="flex space-x-5 px-5 py-4">
            <div className="skeleton animate-wave h-16 w-16 rounded-full bg-slate-150 dark:bg-navy-500" />
            <div className="flex flex-1 flex-col justify-between py-2">
              <div className="skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500" />
              <div className="skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500" />
            </div>
          </div>
          <div className="skeleton animate-wave h-48 w-full bg-slate-150 dark:bg-navy-500" />
          <div className="w-full px-6 py-4">
            <div className="skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500" />
            <div className="skeleton animate-wave mt-4 h-3 w-8/12 rounded bg-slate-150 dark:bg-navy-500" />
          </div>
        </div>
      </div>

      <div className="inline-space mt-5 flex flex-wrap">
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent dark:border-navy-300 dark:border-r-transparent" />
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent" />
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent" />
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-info border-r-transparent" />
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-success border-r-transparent" />
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent" />
        <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-error border-r-transparent" />
      </div>
      <div className="mt-5">
        <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                  #
                </th>
                <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                  Name
                </th>
                <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                  Job
                </th>
                <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                  Favorite Color
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {" "}
                  Blue{" "}
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {" "}
                  Purple{" "}
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {" "}
                  Brice Swyre{" "}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {" "}
                  Crimson{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <ol className="timeline max-w-sm">
          <li className="timeline-item">
            <div className="timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400" />
            <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
              <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                  User Photo Changed
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300">
                  12 minute ago
                </span>
              </div>
              <p className="py-1">John Doe changed his avatar photo</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-item-point rounded-full bg-primary dark:bg-accent" />
            <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
              <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                  Video Added
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300">
                  1 hour ago
                </span>
              </div>
              <p className="py-1">Mores Clarke added new video</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-item-point rounded-full bg-success" />
            <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
              <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                  Design Completed
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300">
                  3 hours ago
                </span>
              </div>
              <p className="py-1">
                Robert Nolan completed the design of the CRM application
              </p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-item-point rounded-full bg-warning" />
            <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
              <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                  ER Diagram
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300">
                  a day ago
                </span>
              </div>
              <p className="py-1">Team completed the ER diagram app</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-item-point rounded-full bg-error" />
            <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
              <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                  Weekly Report
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300">
                  a day ago
                </span>
              </div>
              <p className="py-1">The weekly report was uploaded</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
