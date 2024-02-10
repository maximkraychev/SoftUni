package ConditionalStatementsExercise;

import java.util.Scanner;

public class SumSeconds {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        int firstTime = Integer.parseInt(scan.nextLine());
        int secondTime = Integer.parseInt(scan.nextLine());
        int thirdTime = Integer.parseInt(scan.nextLine());

        int totalTime = firstTime + secondTime + thirdTime;

        int totalMinutes = totalTime / 60;
        int totalSeconds = totalTime % 60;

        if (totalSeconds < 10) {
            System.out.printf("%d:0%d", totalMinutes, totalSeconds);
        } else {
            System.out.printf("%d:%d", totalMinutes, totalSeconds);
        }
    }
}
