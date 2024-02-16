package NestedLoopsExercise;

import java.util.Scanner;

public class TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfJudge = Integer.parseInt(scanner.nextLine());

        String presentationName = scanner.nextLine();
        int numberOfPresentation = 0;
        double totalSumOfAvrGrades = 0;

        while (!presentationName.equals("Finish")) {
            double sumOfGrade = 0;

            for (int i = 1; i <= numberOfJudge; i++) {
                double currentGrade = Double.parseDouble(scanner.nextLine());
                sumOfGrade += currentGrade;
            }

            double avgGrade = sumOfGrade / numberOfJudge;
            numberOfPresentation++;
            totalSumOfAvrGrades += avgGrade;

            System.out.printf("%s - %.2f.\n", presentationName, avgGrade);

            presentationName = scanner.nextLine();
        }

        System.out.printf("Student's final assessment is %.2f.", totalSumOfAvrGrades / numberOfPresentation);
    }
}
