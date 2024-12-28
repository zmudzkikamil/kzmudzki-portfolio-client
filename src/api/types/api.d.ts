/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/about-me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AboutMeController_findAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/about-me/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AboutMeController_findOne"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/experience": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ExperienceController_findAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/experience/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ExperienceController_findOne"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/knowledge": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["KnowledgeController_getAllKnowledge"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/knowledge/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["KnowledgeController_getKnowledgeById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/projects": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ProjectsController_findAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/projects/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ProjectsController_findOne"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/certs": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["CertsController_findAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    AboutMe: {
      id: string;
      year: number;
      title: string;
      description: string;
      icon: string;
    };
    Experience: {
      id: string;
      company: string;
      positions: components["schemas"]["Position"][];
    };
    Position: {
      id: string;
      title: string;
      period: string;
      description: string;
      skills: string[];
      experience: components["schemas"]["Experience"];
    };
    Knowledge: {
      id: string;
      category: string;
      level: string;
      skills: string[];
    };
    Improvement: {
      id: string;
      improvement: string;
      description?: string;
      descriptionDetails?: string[];
      project: components["schemas"]["Project"];
    };
    Project: {
      /**
       * @description Unique project ID
       * @example 1234
       */
      id: string;
      /**
       * @description Category of the project
       * @example Web Development
       */
      category: string;
      /**
       * @description Title of the project
       * @example Portfolio Website
       */
      title: string;
      /**
       * @description Path to the project image
       * @example image.png
       */
      image: string;
      /**
       * @description Skills or technologies used in the project
       * @example [
       *       "React",
       *       "Node.js"
       *     ]
       */
      skills: string[];
      /**
       * @description Details about the project
       * @example [
       *       "Feature 1",
       *       "Feature 2"
       *     ]
       */
      details?: string[] | null;
      /**
       * @description Technologies used in the project
       * @example [
       *       "React",
       *       "Tailwind CSS"
       *     ]
       */
      technologies?: string[] | null;
      /** @description List of views related to the project */
      views: components["schemas"]["View"][];
      /** @description List of improvements suggested for the project */
      improvements: components["schemas"]["Improvement"][];
    };
    View: {
      id: string;
      title: string;
      image: string;
      project: components["schemas"]["Project"];
    };
    Cert: {
      id: number;
      name: string;
      description: string;
      dateIssued: number;
      expirationDate?: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  AboutMeController_findAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AboutMe"][];
        };
      };
    };
  };
  AboutMeController_findOne: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AboutMe"];
        };
      };
    };
  };
  ExperienceController_findAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Experience"][];
        };
      };
    };
  };
  ExperienceController_findOne: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Experience"];
        };
      };
    };
  };
  KnowledgeController_getAllKnowledge: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Knowledge"][];
        };
      };
    };
  };
  KnowledgeController_getKnowledgeById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Knowledge"];
        };
      };
    };
  };
  ProjectsController_findAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>[];
        };
      };
    };
  };
  ProjectsController_findOne: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Project"];
        };
      };
    };
  };
  CertsController_findAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Cert"][];
        };
      };
    };
  };
}