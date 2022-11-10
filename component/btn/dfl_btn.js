import Link from "next/link";

const dfl_btn = (param) => {
  return (
    <>
      {param.className == "default" &&
        (param.href ? (
          <Link href={`${param.href}`}>
            <input
              type="button"
              value={param.children}
              className={param.className}
              href="/portfolio"
            />
          </Link>
        ) : (
          <input
            type="button"
            value={param.children}
            className={param.className}
            href="/portfolio"
          />
        ))}
      {param.className == "arrow" &&
        (param.href ? (
          <Link href={`${param.href}`}>
            <div className="arrow_container">
              <input
                type="button"
                value={param.children}
                className={param.className}
                href="/portfolio"
              />
              <img src="image/mask.svg" alt="" />
            </div>
          </Link>
        ) : (
          <div className="arrow_container">
            <input
              type="button"
              value={param.children}
              className={param.className}
            />
            <img src="image/mask.svg" alt="" />
          </div>
        ))}
    </>
  );
  // }
};

export default dfl_btn;
