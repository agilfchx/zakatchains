import Xendit from 'xendit-node';

const x = new Xendit({
  secretKey:
    'xnd_development_XZOlxBJZBcQ722ZbUteissPxjt0EU94qcA40zERr3gTAAGi09uSanvnvQTxs7vz',
});

export default async function handler(req, res) {
  const { Invoice } = x;
  const invoiceSpecificOptions = {};
  const i = new Invoice(invoiceSpecificOptions);
  const httpMethod = req.method;
  const { extID, email, description, amount } = req.body;

  switch (httpMethod) {
    case 'GET':
      res.status(200).json({ status: 'ok' });
      break;
    case 'POST':
      const invoice = await i.createInvoice({
        externalID: extID,
        payerEmail: email,
        description: description,
        amount: amount,
        successRedirectURL: 'http://localhost:3000/success',
      });
      res.status(200).json({ invoice });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
}
