const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return 0;
  } else if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    input = input.toLowerCase();
    return input.trim();
  } else if (typeof input === "number") {
    input = input * 10;
    return input;
  } else {
    if (input) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, location] = coordinate;
  return `Location: ${location} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...array: T[][]): T[] => {
  const output: T[] = [];
  for (const arr of array) {
    output.push(...arr);
  }
  return output;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const output: Course[] = [];

  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      output.push(course);
    }
  }
  return output;
};

const pluckValues = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  const output: T[K][] = [];
  for (const obj of array) {
    output.push(obj[key]);
  }
  return output;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access Granted");
      } else {
        reject(new Error("Access Denied: Must be 18 or older"));
      }
    }, 1000);
  });
};
