package FirstStepsInCodingExercise;

import java.util.Scanner;

public class VacationBooksList {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        int totalNumberOfPages = Integer.parseInt(scan.nextLine());
        int pagesPerHour = Integer.parseInt(scan.nextLine());
        int days = Integer.parseInt((scan.nextLine()));

        int hoursToReadTheBook = totalNumberOfPages / pagesPerHour;

        System.out.println(hoursToReadTheBook / days);
    }
}
