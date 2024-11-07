import classNames from 'classnames';

export default function Logo({additionalStyles}: {additionalStyles:string[]}) {
    return (
        <div className={classNames(
            "text-[#0866ff] font-bold text-6xl mt-12 text-center",
            additionalStyles
        )}> facebook</div>
    )
}