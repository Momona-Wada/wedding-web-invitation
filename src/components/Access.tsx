import Link from "next/link"

export const Access = () => {
    return (
        <>
        <div className="px-10">
            <div>
                <p>パークサイドハウス大阪梅田</p>
                <Link href="https://parksidehouse.jp/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                    https://parksidehouse.jp/
                </Link>
            </div>
            <div className="py-6">
                <p>〒531-0076</p>
                <p>大阪市大淀中北区1丁目8-30</p>
                <p>Park side house 大阪</p>
            </div>

            <div className="py-2">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.984072375811!2d135.48649311169493!3d34.70558167280512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e687dbdb424f%3A0x3b454ca21ba07a25!2sPark%20Side%20House%20Osaka!5e0!3m2!1sen!2sca!4v1735892415093!5m2!1sen!2sca"
                    width="300"
                    height="200"
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="py-6">
                <p>恐れ入りますが、当会場には駐車場のご用意がございません。
                お手数をおかけしますが、近隣のコインパーキングをご利用くださいますようお願い申し上げます。
                </p>
            </div>
        </div>
        </>
    )
}