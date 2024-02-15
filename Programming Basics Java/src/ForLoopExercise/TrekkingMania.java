package ForLoopExercise;

import java.util.Scanner;

public class TrekkingMania {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfGroups = Integer.parseInt(scanner.nextLine());

        int groupTo5 = 0;
        int groupFrom6to12 = 0;
        int groupFrom13to25 = 0;
        int groupFrom26to40 = 0;
        int groupLargerThen40 = 0;

        for (int i = 1; i <= numberOfGroups; i++) {
            int currentGroupNumber = Integer.parseInt(scanner.nextLine());

            if (currentGroupNumber <= 5) {
                groupTo5 += currentGroupNumber;
            } else if (currentGroupNumber <= 12) {
                groupFrom6to12 += currentGroupNumber;
            } else if (currentGroupNumber <= 25) {
                groupFrom13to25 += currentGroupNumber;
            } else if (currentGroupNumber <= 40) {
                groupFrom26to40 += currentGroupNumber;
            } else {
                groupLargerThen40 += currentGroupNumber;
            }
        }

        double total = groupTo5 + groupFrom6to12 + groupFrom13to25 + groupFrom26to40 + groupLargerThen40;

        System.out.printf("%.2f%%\n", ((groupTo5 / total) * 100));
        System.out.printf("%.2f%%\n", ((groupFrom6to12 / total) * 100));
        System.out.printf("%.2f%%\n", ((groupFrom13to25 / total) * 100));
        System.out.printf("%.2f%%\n", ((groupFrom26to40 / total) * 100));
        System.out.printf("%.2f%%\n", ((groupLargerThen40 / total) * 100));
    }
}
