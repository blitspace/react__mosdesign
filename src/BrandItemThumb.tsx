function BrandItemThumb({ title, image }: { title: string, image: string }) {
    return (
        <div className="flex flex-col w-full aspect-square" title={`${title}`}>
            <div
                className="flex flex-col items-center justify-center w-full overflow-hidden bg-center bg-cover bg-opacity-60 aspect-square bg-slate-200"
                style={{ backgroundImage: `url('${image}')`}}
            >
                <div className="text-2xl text-white">{ title }</div>
            </div>
        </div>
    );
}

export default BrandItemThumb;