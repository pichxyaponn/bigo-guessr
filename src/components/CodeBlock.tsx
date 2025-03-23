'use client';

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';

// Import Prism CSS themes - we'll use the okaidia theme by default
import 'prismjs/themes/prism-okaidia.css';

// Import language support
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Highlight the code using Prism
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="rounded-lg bg-gray-900 p-4 overflow-auto max-h-[400px] w-full">
      <pre ref={codeRef} className={`language-${language}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
