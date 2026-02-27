import re
import sys
from pathlib import Path

import pdfplumber


def extract_text(pdf_path: Path) -> str:
    parts: list[str] = []
    with pdfplumber.open(str(pdf_path)) as pdf:
        for i, page in enumerate(pdf.pages, start=1):
            t = page.extract_text() or ""
            t = t.replace("\u00a0", " ")
            t = re.sub(r"[\t ]+", " ", t)
            t = re.sub(r"\n{3,}", "\n\n", t)
            parts.append(f"--- page {i} ---\n{t}".strip())
    return "\n\n".join(parts).strip() + "\n"


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python tools/extract_cv.py <path-to-pdf>")
        return 2

    pdf_path = Path(sys.argv[1]).expanduser()
    if not pdf_path.exists():
        print(f"File not found: {pdf_path}")
        return 2

    print(extract_text(pdf_path))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
