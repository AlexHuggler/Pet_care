type Ld = Record<string, unknown>;

/**
 * Renders JSON-LD structured data. The payload is built on the server from our
 * own static config, so inlining it is safe.
 */
export function JsonLd({ data }: { data: Ld | Ld[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
