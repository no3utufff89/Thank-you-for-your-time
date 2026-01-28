export default function Garantie() {
    return (
        <div className={"p-3 rounded-[20px] border-[#484d4e] border 2md:p-5"}>
            <div
                className={"pt-2.5 pb-3 px-3.5 border border-new-light-green rounded-[30px] w-full text-center bg-[#2d3233] mb-2.5 xs:max-w-max 2md:mb-7.5  2md:pt-4 2md:pb-4.5 2md:px-7.5"}>
                <span
                    className={"font-medium text-new-light-green text-[16px] leading-[120%] xs:text-[18px] 2md:text-[28px]"}>гарантия возврата 30 дней</span>
            </div>
            <p className={"text-[13px] leading-[130%] text-[#dcdcdc] xs:text-[14px] 2md:text-[24px]"}>
                Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже
                готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых
                результатов.
            </p>
        </div>
    )
}