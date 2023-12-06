import { Questionnaire } from "@/types/questionnaire";
import { IListItem, ISearchParam } from "@/types/page";

export const getListQuestionnaires = async ({
  limit,
  page,
  searchTerm,
}: ISearchParam): Promise<IListItem<Questionnaire>> => {
  const data = await fetch(
    `${process.env.BE_HOST}/api/questionnaires?limit=${limit}&page=${page}&searchTerm=${searchTerm}`,
    {
      method: "GET",
      cache: "no-cache",
      next: {
        tags: ["list-products"],
      },
    }
  );

  return data.json();
};