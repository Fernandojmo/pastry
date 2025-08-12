import { db } from "@/lib/firebase";

interface Creation {
  title: string;
  image: string;
  difficulty: string;
  time: string;
  recipe: string;
}

export default async function CreationDetailPage({ params }: { params: { id: string } }) {
  const snap = await db.collection("creations").doc(params.id).get();
  if (!snap.exists) {
    return (
      <div className="container">
        <p>Not found</p>
      </div>
    );
  }

  const creation = snap.data() as Creation;

  return (
    <div className="container">
      <h1 className="title">{creation.title}</h1>
      <img src={creation.image} alt={creation.title} />
      <p>Difficulty: {creation.difficulty}</p>
      <p>Time: {creation.time}</p>
      <p>{creation.recipe}</p>
    </div>
  );
}
