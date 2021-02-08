import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem, Container } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { IPhone, PhoneTypeEnum } from '@cellebrite/data';

/* eslint-disable-next-line */
export interface PhoneDetailsProps {
  view: 'add' | 'edit';
  data?: IPhone;
  onSubmit: (data: IPhone) => void;
}

function isJSON(str) {
  try {
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
}

export function PhoneDetails({
  view,
  data = {} as IPhone,
  onSubmit,
}: PhoneDetailsProps) {
  const { id, type, color, serial, metadata } = data;
  return (
    <Formik
      initialValues={{
        id,
        type,
        color,
        serial,
        metadata,
      }}
      validate={(values) => {
        const errors: Partial<IPhone> = {};
        if (!values.type) {
          errors.type = 'Required';
        }
        if (!values.color) {
          errors.color = 'Required';
        }
        if (!values.serial) {
          errors.serial = 'Required';
        }
        if (!values.metadata) {
          errors.metadata = 'Required';
        } else if (!isJSON(values.metadata)) {
          errors.metadata = 'Not a valid JSON';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          {view === 'edit' && (
            <div>
              <Field
                component={TextField}
                name="id"
                type="text"
                label="ID"
                disabled
                style={{ width: '100%' }}
              />
            </div>
          )}
          <div>
            <Field
              component={TextField}
              type="text"
              name="type"
              label="Type"
              select={true}
              style={{ width: '100%' }}
            >
              {Object.values(PhoneTypeEnum).map((type) => (
                <MenuItem value={type}>{type}</MenuItem>
              ))}
            </Field>
          </div>
          <div>
            <Field
              component={TextField}
              name="color"
              type="text"
              label="Color"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              component={TextField}
              name="serial"
              type="text"
              label="Serial"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <Field
              component={TextField}
              name="metadata"
              type="text"
              label="Metadata"
              style={{ width: '100%' }}
            />
          </div>
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            {view === 'edit' ? 'Update' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default PhoneDetails;
