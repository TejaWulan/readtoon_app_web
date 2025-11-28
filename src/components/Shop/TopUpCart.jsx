export default function TopupCart() {
  return (
<div className="w-full flex justify-center mt-6">
  <div className="flex gap-6">

    <button className="group w-40 h-40 bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center border border-gray-200 hover:bg-[#66c7ff] hover:text-[#66c7ff] transition-all duration-300">
      <i className='bx bx-wallet-alt text-5xl mb-2 group-hover:scale-110 transition-transform'></i>
      <span className="font-semibold text-lg">Topup Balance</span>
    </button>

    <button className="group w-40 h-40 bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center border border-gray-200 hover:bg-[#66c7ff] hover:text-[#66c7ff] transition-all duration-300">
      <i className='bx bx-cart text-5xl mb-2 group-hover:scale-110 transition-transform'></i>
      <span className="font-semibold text-lg">Cart</span>
    </button>

  </div>
</div>

);
}
