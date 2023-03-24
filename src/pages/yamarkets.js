const Yamarkets = () => {
  const handleOnCLick=()=>{
    console.log("kkkkkk")
  }
  return (
    <div className="relative bg-black w-full h-[1050px] text-left text-base text-gold-100 font-proxima-nova">
      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
        <div className="[background:linear-gradient(180deg,_#1c2635,_#091322)] w-[1440px] flex flex-row pt-72 px-20 pb-36 box-border items-center justify-start relative">
          <div className="flex flex-col items-start justify-start gap-[32px] z-[0]">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <b className="relative tracking-[2px] uppercase">
                the future of Trading
              </b>
              <div className="flex flex-col items-start justify-start gap-[16px] text-[64px] text-white">
                <div className="w-[540px] flex flex-row items-start justify-start">
                  <b className="relative leading-[72px] capitalize">
                    <p className="m-0">Get latest</p>
                    <p className="m-0">signals from</p>
                    <p className="m-0">markets experts</p>
                  </b>
                </div>
                <div className="self-stretch relative text-[20px] leading-[32px] font-light">
                  YaMarkets Limited is authorised and regulated as an Investment
                  dealer by the Financial Services Commission of Mauritius
                  (License C165091)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[24px]">
              <button

              onClick={handleOnCLick}
                className="cursor-pointer [border:none] py-2.5 px-5 bg-gold-100 rounded-3xs h-10 flex flex-row box-border items-center justify-start"
                autoFocus
              >
                <div className="relative text-base tracking-[0.5px] leading-[32px] font-semibold font-proxima-nova text-black text-left">
                  Open live account
                </div>
              </button>
              <div className="relative tracking-[0.5px] leading-[32px] font-semibold">
                Read more
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute bottom-[32px] left-[calc(50%_-_90px)] flex flex-row items-start justify-start gap-[12px] z-[1]">
            <div className="relative rounded-81xl bg-white w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
            <div className="relative rounded-81xl bg-gray-100 w-3 h-3 shrink-0" />
          </div>
          <img
            className="absolute my-0 mx-[!important] h-[60.35%] w-[54.17%] top-[30.35%] right-[0%] bottom-[9.3%] left-[45.83%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
            alt=""
            src="/graphic-elements@2x.png"
          />
        </div>
        <div className="self-stretch [background:linear-gradient(180deg,_#0e1725,_#091322)] flex flex-row py-10 px-20 items-center justify-start gap-[48px] text-25xl">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative bg-gold-100 h-0.5 shrink-0 opacity-[0.48]" />
              <b className="relative leading-[60px]">1:1000</b>
            </div>
            <div className="relative text-sm tracking-[1px] leading-[24px] uppercase font-medium font-poppins text-gray-300">
              Account Leverage
            </div>
          </div>
          <div className="relative box-border w-px h-[65px] shrink-0 border-r-[1px] border-solid border-gray-200" />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px] text-sm text-gray-300 font-poppins">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative bg-gold-100 h-0.5 shrink-0 opacity-[0.48]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-25xl leading-[60px] font-bold font-proxima-nova text-gold-100 text-left inline-block">
                4
              </button>
            </div>
            <div className="relative tracking-[1px] leading-[24px] uppercase font-medium">
              Account Type
            </div>
          </div>
          <div className="relative box-border w-px h-[65px] shrink-0 border-r-[1px] border-solid border-gray-200" />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative bg-gold-100 h-0.5 shrink-0 opacity-[0.48]" />
              <b className="relative leading-[60px]">100+</b>
            </div>
            <div className="relative text-sm tracking-[1px] leading-[24px] uppercase font-medium font-poppins text-gray-300">
              Instruments
            </div>
          </div>
          <div className="relative box-border w-px h-[65px] shrink-0 border-r-[1px] border-solid border-gray-200" />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative bg-gold-100 h-0.5 shrink-0 opacity-[0.48]" />
              <b className="relative leading-[60px]">0.0</b>
            </div>
            <div className="relative text-sm tracking-[1px] leading-[24px] uppercase font-medium font-poppins text-gray-300">
              Spreads as Low as 0 Pips
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start text-[9.36px] font-arial">
        <div className="w-[1440px] h-20 shrink-0 flex flex-row py-3 px-20 box-border items-center justify-between">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[285.5px] shrink-0 flex flex-row items-start justify-start gap-[12px]">
            <div className="rounded-3xs bg-black box-border h-10 flex flex-row py-2.5 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-gray-400">
              <img
                className="relative w-[16.22px] h-5 shrink-0"
                alt=""
                src="/vector.svg"
              />
              <div className="relative text-base tracking-[0.5px] leading-[32px] font-semibold font-proxima-nova text-white text-left">
                iOS
              </div>
            </div>
            <button className="cursor-pointer py-2.5 px-5 bg-[transparent] rounded-3xs box-border h-10 flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-white">
              <div className="relative text-base tracking-[0.5px] leading-[32px] font-semibold font-proxima-nova text-white text-left">
                Copy trading
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <img
                  className="relative w-3 h-1.5 shrink-0"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </button>
          </button>
          <div className="relative w-[159.74px] h-[52.12px] shrink-0">
            <div className="absolute h-[21.11%] w-[54.24%] top-[78.89%] right-[20.49%] bottom-[0%] left-[25.27%]">
              <div className="absolute top-[0%] left-[0%]">IT’S</div>
              <div className="absolute top-[0%] left-[22.02%]">TRADING</div>
              <div className="absolute top-[0%] left-[73.45%]">TIME</div>
            </div>
            <img
              className="absolute h-[12.76%] w-[3.31%] top-[32.96%] right-[75.12%] bottom-[54.29%] left-[21.56%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
            <img
              className="absolute h-[22.48%] w-[3.31%] top-[51.2%] right-[75.13%] bottom-[26.32%] left-[21.55%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
            <img
              className="absolute h-[37.48%] w-[3.31%] top-[8.73%] right-[69.12%] bottom-[53.79%] left-[27.56%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="absolute h-[25.02%] w-[3.31%] top-[53.16%] right-[69.13%] bottom-[21.83%] left-[27.55%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector5.svg"
            />
            <img
              className="absolute h-[45.39%] w-[3.37%] top-[0%] right-[63.32%] bottom-[54.61%] left-[33.3%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector6.svg"
            />
            <button className="cursor-pointer [border:none] p-0 bg-white absolute h-[10.1%] w-[3.36%] top-[51%] right-[63.33%] bottom-[38.9%] left-[33.3%]" />
            <img
              className="absolute h-[21.98%] w-[3.37%] top-[20.49%] right-[57.38%] bottom-[57.53%] left-[39.25%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
            <img
              className="absolute h-[32.23%] w-[3.37%] top-[45.92%] right-[57.39%] bottom-[21.86%] left-[39.24%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector8.svg"
            />
            <img
              className="absolute h-[15.84%] w-[33.56%] top-[33.74%] right-[51.44%] bottom-[50.41%] left-[15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector9.svg"
            />
            <input
              className="[border:none] bg-goldenrod absolute h-[2.54%] w-[3.3%] top-[42.97%] right-[75.13%] bottom-[54.49%] left-[21.56%]"
              type="text"
            />
            <textarea className="[border:none] bg-goldenrod absolute h-[3.59%] w-[3.36%] top-[41.3%] right-[63.33%] bottom-[55.1%] left-[33.3%]" />
            <input
              className="[border:none] bg-goldenrod absolute h-[5.11%] w-[3.36%] top-[36.98%] right-[57.39%] bottom-[57.91%] left-[39.25%]"
              type="text"
            />
            <img
              className="absolute h-[2.36%] w-[3.31%] top-[43.32%] right-[69.13%] bottom-[54.32%] left-[27.55%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector10.svg"
            />
            <img
              className="absolute h-[45.01%] w-[11.83%] top-[33.13%] right-[88.17%] bottom-[21.86%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector11.svg"
            />
            <img
              className="absolute h-[33.72%] w-[8.9%] top-[44.63%] right-[81.18%] bottom-[21.65%] left-[9.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector12.svg"
            />
            <img
              className="absolute h-[33.72%] w-[8.9%] top-[44.63%] right-[46.17%] bottom-[21.65%] left-[44.92%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector13.svg"
            />
            <img
              className="absolute h-[32.26%] w-[7.49%] top-[45.89%] right-[37.74%] bottom-[21.86%] left-[54.77%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector14.svg"
            />
            <img
              className="absolute h-[45.57%] w-[8.18%] top-[32.34%] right-[27.8%] bottom-[22.09%] left-[64.02%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector15.svg"
            />
            <img
              className="absolute h-[33.1%] w-[8.8%] top-[45.04%] right-[17.41%] bottom-[21.86%] left-[73.79%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector16.svg"
            />
            <img
              className="absolute h-[42.44%] w-[5.12%] top-[35.55%] right-[10.53%] bottom-[22%] left-[84.34%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector17.svg"
            />
            <img
              className="absolute h-[33.1%] w-[8.8%] top-[45.04%] right-[0.04%] bottom-[21.86%] left-[91.16%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector18.svg"
            />
            <img
              className="absolute h-[3.04%] w-[2.91%] top-[33.13%] right-[97.09%] bottom-[63.83%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector19.svg"
            />
            <textarea className="[border:none] bg-gold-200 absolute h-[3.04%] w-[2.91%] top-[33.13%] right-[88.17%] bottom-[63.83%] left-[8.91%]" />
            <img
              className="absolute h-[2.86%] w-[18.1%] top-[88.48%] right-[77%] bottom-[8.66%] left-[4.9%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector20.svg"
            />
            <img
              className="absolute h-[2.86%] w-[18.1%] top-[88.62%] right-[0%] bottom-[8.52%] left-[81.9%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector21.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end gap-[24px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[12px]">
              <button className="cursor-pointer [border:none] py-2.5 px-5 bg-lightseagreen rounded-3xs h-10 flex flex-row box-border items-center justify-start gap-[8px]">
                <div className="relative text-base tracking-[0.5px] leading-[32px] font-semibold font-proxima-nova text-white text-left">
                  Login
                </div>
                <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                  <img
                    className="relative w-3 h-1.5 shrink-0"
                    alt=""
                    src="/vector22.svg"
                  />
                </div>
              </button>
              <div className="rounded-3xs box-border h-10 flex flex-row py-2.5 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-gold-200">
                <img
                  className="relative w-5 h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/fluentpeoplecommunity20filled.svg"
                />
                <div className="relative text-base tracking-[0.5px] leading-[32px] uppercase font-semibold font-proxima-nova text-gold-200 text-left">
                  IB
                </div>
              </div>
            </button>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <img
                  className="relative rounded-[2.5px] w-[27.5px] h-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/artwork.svg"
                />
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <button className="cursor-pointer p-0 bg-[transparent] relative box-border w-[11.2px] h-[5.2px] shrink-0 border-[1.2px] border-solid border-white" />
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-500" />
        <div className="w-[1440px] flex flex-row py-4 px-24 box-border items-center justify-center text-base text-white font-proxima-nova">
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.5px] leading-[32px]">
                About
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <img
                  className="relative w-[11.2px] h-[5.2px] shrink-0"
                  alt=""
                  src="/vector23.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.5px] leading-[32px]">
                Products
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <img
                  className="relative w-[11.2px] h-[5.2px] shrink-0"
                  alt=""
                  src="/vector23.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.5px] leading-[32px]">
                Traders
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <img
                  className="relative w-[11.2px] h-[5.2px] shrink-0"
                  alt=""
                  src="/vector23.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[8px]">
              <div className="relative text-base tracking-[0.5px] leading-[32px] font-proxima-nova text-white text-left">
                Platform
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <input
                  className="cursor-pointer relative box-border w-[11.2px] h-[5.2px] shrink-0 border-[1.2px] border-solid border-white"
                  type="checkbox"
                />
              </div>
            </button>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.5px] leading-[32px]">
                Promotion
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <input
                  className="cursor-pointer relative box-border w-[11.2px] h-[5.2px] shrink-0 border-[1.2px] border-solid border-white"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.5px] leading-[32px]">
                Education
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <button className="cursor-pointer p-0 bg-[transparent] relative box-border w-[11.2px] h-[5.2px] shrink-0 border-[1.2px] border-solid border-white" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.5px] leading-[32px]">
                Contest
              </div>
              <div className="w-5 h-5 shrink-0 flex flex-col p-2.5 box-border items-center justify-center">
                <input
                  className="cursor-pointer relative box-border w-[11.2px] h-[5.2px] shrink-0 border-[1.2px] border-solid border-white"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="relative tracking-[0.5px] leading-[32px]">Blog</div>
            <div className="relative tracking-[0.5px] leading-[32px]">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yamarkets;
