export const Skeleton = () => {
    const arr = new Array(10).fill(0);
    return (
        <>
            {
                arr.map((_, i) => (
                    <div key={i} className="animate-pulse border border-stone-300 rounded-xl w-[100%] md:w-[45%] lg:w-[30%] flex flex-col items-center   gap-2 p-4 bg-stone-300">
                        <div className="h-[200px] w-[150px] border rounded-xl"  ></div>
                        <h4 className="text-center text-[20px]"></h4>
                        <div className="flex border w-full rounded-xl h-[40px] ">
                        </div>
                        <div className="flex border w-[150px] rounded-xl  h-[30px]">
                        </div>
                    </div>
                ))
            }
        </>
    )
}