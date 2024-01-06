import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Infografis() {
  return (
    <div className="flex container mx-auto p-8">
      <div className="flex-auto border-2 grow">
        <h1 className="font-bold text-4xl	text-emerald-700">Infografis</h1>
        <p className="font-medium text-gray-400 py-4">
          Bentuk visualisasi data statistik BPS yang disajikan dengan
          menggunakan ilustrasi, grafik, dan teks (klik gambar untuk
          memperjelas)
        </p>
        <div className="flex">
          <div className="flex-auto w- border-2 mr-2">
            <h2 className="font-bold text-3xl	text-emerald-700 mb-4">Subjek</h2>
            <ul className="border-2 border-gray-300 border-solid rounded-2xl p-4">
              <li className="p-3 rounded-2xl bg-emerald-700 text-white">
                <a className="font-medium text-lg">Pertumbuhan Ekonomi</a>
              </li>
              <li className="p-3">
                <a className="font-medium text-lg">Kemiskinan</a>
              </li>
              <li className="p-3">
                <a className="font-medium text-lg">Ketenagakerjaan</a>
              </li>
              <li className="p-3">
                <a className="font-medium text-lg">
                  Indeks Pembangunan Manusia
                </a>
              </li>
              <li className="p-3">
                <a className="font-medium text-lg">Gini Ratio</a>
              </li>
              <li className="p-3">
                <a className="font-medium text-lg">PDRB Per Kapita</a>
              </li>
            </ul>
          </div>
          <div className="flex-auto w-16">
            <ul className="border-2 border-solid ml-2 rounded-2xl px-6 py-4 grid grid-cols-3 gap-4">
              <li>
                <div className="h-[200px] bg-gray-300">01</div>
                <p className="text-center">Provinsi Aceh</p>
              </li>
              <li>
                <div className="h-[200px] bg-gray-300">01</div>
                <p className="text-center">Provinsi Sumatera Utara</p>
              </li>
              <li>
                <div className="h-[200px] bg-gray-300">01</div>
                <p className="text-center">Provinsi Sumatera Barat</p>
              </li>
            </ul>
            <div className="flex items-center justify-center mt-4">
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm justify-center"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-emerald-700 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  4
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto border-2">2</div>
    </div>
  );
}
